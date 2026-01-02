import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddAdmin = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [image, setImage] = useState(null);
	const [imageLink, setImageLink] = useState('');

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// First, upload the image to your API
			const formData = new FormData();
			formData.append('image', image); // Pass the image as 'image' field

			const imageUploadResponse = await axios.post(`${import.meta.env.VITE_API_URL}/user/image`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			const imageUrl = imageUploadResponse.data.result;
			setImageLink(imageUrl);

			// Now create a new admin with the image URL
			const newAdminData = {
				name,
				email,
				password,
				pic: imageUrl,
			};

			const createAdminResponse = await axios.post(
				`${import.meta.env.VITE_API_URL}/user/newuser`,
				newAdminData,
				{ headers: { token: localStorage.getItem('token') } }
			);
			console.log(createAdminResponse);
			if (createAdminResponse.status === 200) {
				toast.success(createAdminResponse.data.msg);
				// Reset form after successful admin creation
				setName('');
				setEmail('');
				setPassword('');
				setImage(null);
				setImageLink('');
			}
		} catch (error) {
			console.error('Error:', error);
			toast.error('Something went wrong! Please try again.');
		}
	};

	// Handle image selection
	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setImage(file);
			const imageUrl = URL.createObjectURL(file);
			setImageLink(imageUrl);
		}
	};

	return (
		<div className="mx-auto w-full max-w-2xl">
			<div className="admin-card">
				<div className="admin-card-inner">
					<div className="mb-6">
						<h2 className="admin-title">Add Admin</h2>
						<p className="admin-muted mt-1">Create a new admin account.</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label className="admin-label">Name</label>
							<input
								type="text"
								className="admin-input"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</div>

						<div>
							<label className="admin-label">Email</label>
							<input
								type="email"
								className="admin-input"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>

						<div>
							<label className="admin-label">Password</label>
							<input
								type="password"
								className="admin-input"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>

						<div>
							<label className="admin-label">Profile Image</label>
							<input
								type="file"
								accept="image/*"
								onChange={handleImageChange}
								className="mt-2 block w-full text-sm text-zinc-700 file:mr-3 file:rounded-lg file:border-0 file:bg-zinc-100 file:px-4 file:py-2 file:text-sm file:font-medium file:text-zinc-700 hover:file:bg-zinc-200"
								required
							/>
						</div>

						{imageLink && (
							<div>
								<div className="admin-label">Preview</div>
								<img
									src={imageLink}
									alt="Image Preview"
									className="mt-2 w-full rounded-xl border border-zinc-200"
									style={{ objectFit: 'cover', maxHeight: '200px' }}
								/>
							</div>
						)}

						<div>
							<label className="admin-label">Image URL (Result)</label>
							<input type="text" className="admin-input" value={imageLink} readOnly />
						</div>

						<button type="submit" className="admin-button-primary w-full">
							Create Admin
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddAdmin;
