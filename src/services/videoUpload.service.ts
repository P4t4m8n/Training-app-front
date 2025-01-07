export const uploadToCloudinary = async (uri: string) => {
  const uploadPreset = process.env.EXPO_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;
  console.log("uploadPreset:", uploadPreset)
  const cloudName = process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME!;
  console.log("cloudName:", cloudName)
  const data = new FormData();
  data.append("file", {
    uri,
    name: "video.mp4",
    type: "video/mp4",
  } as any); // 'any' used for compatibility with FormData in React Native

  data.append("upload_preset", uploadPreset); // Replace with your Cloudinary preset
  data.append("cloud_name", cloudName); // Replace with your Cloudinary cloud name

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const result = await response.json();
    console.log("Uploaded video URL:", result.secure_url);

    // Save the `result.secure_url` to your database if needed
    return result;
  } catch (error) {
    console.error("Error uploading video:", error);
  }
};
