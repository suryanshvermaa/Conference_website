import { useState, useEffect } from "react"
import { Search, Users, AlertCircle, RefreshCw, X } from "lucide-react"

export default function AllSpeakerprog() {
  const [speakers, setSpeakers] = useState([])
  const [filteredSpeakers, setFilteredSpeakers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [toast, setToast] = useState(null)

  const token =localStorage.getItem("token");

  const showToast = (message, type) => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 5000)
  }

  const fetchSpeakers = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`${import.meta.env.VITE_API_URL}/speaker/all`)

      if (!response.ok) {
        throw new Error("Failed to fetch speakers")
      }

      const data = await response.json()
      data.sort((a, b) => (a.priority || 0) - (b.priority || 0))
      setSpeakers(data)
      setFilteredSpeakers(data)
    } catch (error) {
      console.error("Error fetching speakers:", error)
      setError("Failed to fetch speakers. Please try again.")
      showToast("Failed to fetch speakers. Please try again.", "error")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSpeakers()
  }, [])

  useEffect(() => {
    const filtered = speakers.filter(
      (speaker) =>
        speaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        speaker.specialization.some((spec) => spec.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (speaker.description && speaker.description.toLowerCase().includes(searchTerm.toLowerCase())),
    )
    setFilteredSpeakers(filtered)
  }, [searchTerm, speakers])

  const SpeakerSkeleton = () => (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <div className="w-full h-64 bg-gray-200 animate-pulse" />
      </div>
      <div className="p-6">
        <div className="h-6 bg-gray-200 rounded animate-pulse mb-2 w-3/4" />
        <div className="flex gap-2 mb-4">
          <div className="h-6 bg-gray-200 rounded-full animate-pulse w-16" />
          <div className="h-6 bg-gray-200 rounded-full animate-pulse w-20" />
        </div>
        <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-full" />
        <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3" />
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-4 right-4 z-50">
          <div
            className={`rounded-lg p-4 shadow-lg border flex items-center gap-3 min-w-[300px] animate-in slide-in-from-top ${
              toast.type === "error"
                ? "bg-red-50 border-red-200 text-red-800"
                : "bg-green-50 border-green-200 text-green-800"
            }`}
          >
            <div className="flex-1">
              <p className="text-sm font-medium">{toast.message}</p>
            </div>
            <button onClick={() => setToast(null)} className="text-current hover:opacity-70 transition-opacity">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 mt-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Speakers</h1>
           
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search speakers, specializations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 shadow-sm"
              />
            </div>
          </div>

          {/* Error State */}
          {error && (
            <div className="max-w-4xl mx-auto mb-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-red-800 font-medium">Error</p>
                  <p className="text-red-700 text-sm mt-1">{error}</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <button
                  onClick={fetchSpeakers}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm"
                >
                  <RefreshCw className="h-4 w-4" />
                  Try Again
                </button>
              </div>
            </div>
          )}

          {/* Loading State */}
          {loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <SpeakerSkeleton key={index} />
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && filteredSpeakers.length === 0 && (
            <div className="text-center py-12">
              <div className="p-3 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {searchTerm ? "No speakers found" : "No speakers available"}
              </h3>
              <p className="text-gray-600 mb-4">
                {searchTerm
                  ? "Try adjusting your search terms or clear the search to see all speakers."
                  : "Check back later for our featured speakers."}
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm"
                >
                  Clear Search
                </button>
              )}
            </div>
          )}

          {/* Speakers Grid */}
          {!loading && !error && filteredSpeakers.length > 0 && (
            <>
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing {filteredSpeakers.length} of {speakers.length} speakers
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredSpeakers.map((speaker) => (
                  <div
                    key={speaker._id}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
                  >
                    <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                      <img
                        src={speaker.imageUrl || "/placeholder.svg"}
                        alt={speaker.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {speaker.name}
                      </h2>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {speaker.specialization.map((spec, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200 transition-colors duration-200"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-600 line-clamp-4 text-sm leading-relaxed">
                        {speaker.description ||
                          "An accomplished professional with extensive experience in their field."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
