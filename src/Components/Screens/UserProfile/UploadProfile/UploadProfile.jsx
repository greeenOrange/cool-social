import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { BiX, BiImageAdd } from "react-icons/bi";

function UploadProfile({ setShowUpForm }) {
  const [imageString, setImageStr] = useState('');
  const [preview, setPreview] = useState({ state: false, url: '' });
  const [loading, setLoading] = useState(false);
  const imgStorageKey = "c0bfd70fa172413d57b27931e84a2431";
  // const { updatePhoto } = useUsers()
  // const { setUser } = useAuth()
  // const { isDark } = useApp();
  const { formState: { errors }, handleSubmit, reset} = useForm();

  const previewFile = (e) => {
    const file = e.target.files[0];
    setPreview({ state: true, url: URL.createObjectURL(e.target.files[0]) })
    const reader = new FileReader();
    reader.addEventListener('loadend', () => {
      setImageStr(reader.result);
    });
    reader.readAsDataURL(file);
  }
  
  const onSubmit = async (data) => {
    if (data && data.image && data.image.length > 0) {
      console.log(data.image.length);
      const image = data.image[0];
      console.log(image);
      const formData = new FormData();
      formData.append('image', image);
  
      const url = `https://api.imgbb.com/1/upload=${imgStorageKey}`;
  
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: formData
        });
  
        if (!response.ok) {
          throw new Error('Failed to upload image');
        }
  
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      console.error('No image data found');
    }
  };
  

  return (
    <div className="w-full top-0 left-0 z-[10] absolute bg-black/70 
		flex flex-col items-center justify-center h-screen">

      <div
        onClick={() => setShowUpForm(false)}
        className="w-full h-screen absolute top-0 left-0 z-[15]"></div>
      <div className="flex z-20 flex-col relative items-center w-1/3 
      rounded-xl p-4 min-w-[300px] bg-white" >

        <BiX
          onClick={() => setShowUpForm(false)}
          className="text-4xl absolute top-1 hover:text-red-600 cursor-pointer right-3" />
        <h2 className="text-center text-xl">Add profile picture</h2>
        <label htmlFor="post" className="flex flex-col mt-2 cursor-pointer text-blue-700 items-center">
          <BiImageAdd className={`${preview.state ? 'text-3xl' : 'text-[8em]'}`} />
          <p>Add A Photo</p>
        </label>
        {preview.state && (
          <div className="w-[150px] mx-auto mt-3 h-[150px] overflow-hidden">
            <img src={imageString} className="object-cover min-h-full min-w-full" alt="" />
          </div>
        )}
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mt-4 flex items-center justify-center">
  
					<input onChange={previewFile}  className="hidden" type="file" id="post" accept="image/*" />
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default UploadProfile