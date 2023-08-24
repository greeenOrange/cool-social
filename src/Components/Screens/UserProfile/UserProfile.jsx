import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { BiEdit, BiGridAlt } from 'react-icons/bi';
import UploadProfile from './UploadProfile/uploadProfile';
import { FaCamera } from 'react-icons/fa';

function UserProfile() {
    const [user] = useAuthState(auth);
	// const { userPosts, setUserPosts } = usePosts();
    const [showUpForm, setShowUpForm] = useState(false);
    const [showCoverForm, setShowCoverForm] = useState(false);
    const [loading , setLoading] = useState(true);
  return (
    <div>
        <div
					className={`w-full flex py-4 tab:px-4 mobile:px-1 pb-11 tab:h-screen h-[86vh]  overflow-auto`}
				>
					<div className="w-full flex h-full flex-col  mx-auto items-center  max-w-[900px]">
						<div className="w-full relative h-[30vh] overflow-hidden">
							<img
								className="object-cover min-w-full min-h-full"
								src={user.cover}
								alt=""
								srcSet=""
							/>
							<BiEdit
								onClick={() => setShowCoverForm(true)}
								className="absolute cursor-pointer
                                 top-2 right-4 text-[2em] p-1 bg-blue-600 rounded-full  z-[999] text-white"
							/>
						</div>
						{showUpForm && (
							<UploadProfile setShowUpForm={setShowUpForm} user={user} />
						)}
						{/* {showCoverForm && (
							<UpdateCover setShowCoverForm={setShowCoverForm} user={user} />
						)} */}
						<div
							className={`flex  flex-col w-full  p-3 h-[40vh] translate-y-[-5vh]
                     bg-slate rounded-t-3xl`}
							style={{}}
						>
							<div className="flex w-full sm:flex-row flex-col items-center text-xs sm:text-base">
								<div className="flex flex-col items-center">
									<div className="tab:w-[100px] relative  tab:h-[100px] h-[70px] w-[70px] border-2 border-blue-500 rounded-full overflow-hidden flex flex-col">
										<img
											className="object-cover min-w-full min-h-full"
											src={user.profile}
										/>
										<FaCamera
											onClick={() => setShowUpForm(true)}
											className="absolute cursor-pointer
                                 bottom-2 right-4 text-[1.4em] p-1 bg-blue-600 rounded-full  z-[999] text-white"
										/>
									</div>
									<div className="flex flex-col">
										<p className="font-semibold">{user.fullname}</p>
										<p className="opacity-80">{user.username}</p>
									</div>
								</div>
								<div className="flex items-center sm:w-fit w-fll justify-between">
									<div
										className={`flex flex-col items-center px-3 py-1 ml-4 rounded-xl shadow-md`}
									>
										{/* {userPosts !== null && <p>{userPosts.length}</p>} */}
										<p>Posts</p>
									</div>
									<div
										className={`flex flex-col items-center px-3 py-1 ml-4 rounded-xl shadow-md`}
									>
										<p>{user.followers}</p>
										<p>Followers</p>
									</div>
									<div
										className={`flex flex-col items-center px-3 py-1 ml-4 rounded-xl shadow-md`}
									>
										<p>{user.following}</p>
										<p>Following</p>
									</div>
								</div>
							</div>
							<div className="flex items-center">
								<div className="flex flex-col w-full items-center sm:mt-0 mt-2">
									{/* <p>Programming is all about thinking, solving problems and making people lazy 😂</p> */}
									<div className="flex items-center">
										<p className="text-blue-500 cursor-pointer">Edit Profile</p>
										<p
											onClick={() => setShowUpForm(true)}
											className="text-blue-500 hover:underline ml-3 cursor-pointer"
										>
											Edit Profile Photo
										</p>
									</div>
								</div>
							</div>
							<div className="flex items-center justify-between mt-3 w-full">
								<div className="flex items-center">
									<p className="py-1 border-b-2 border-blue-500">Posts</p>
									<p className="ml-4">Status</p>
									<p className="ml-4">Media</p>
								</div>
								<BiGridAlt className="text-2xl" />
							</div>
							<div className="flex flex-col w-full items-center justify-center">
								{/* {loading &&
									userPosts ===
										null &&(
											<p className="text-center text-2xl h-[20vh] flex items-center justify-center">
												Loading...
											</p>
										)} */}
								{/* {userPosts !== null &&
									(userPosts.length === 0 ? (
										<p className="text-center text-2xl h-[20vh] flex items-center justify-center">
											No posts yet
										</p>
									) : (
										userPosts.map((post) => (
											<Post key={Math.random() * 99222} item={post} />
										))
									))} */}
								{/* <Drop /> */}
							</div>
						</div>
					</div>
				</div>
    </div>
  )
}

export default UserProfile