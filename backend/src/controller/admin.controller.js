import { Song } from "../models/song.model.js";
import { Album } from "../models/album.model.js";
 
const uploadToCloudinary = async (file) => {
  try{
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      resource_type: "auto"
    });
    return result.secure_url;
   
  } catch (error) {
    console.error("Error uploading to Cloudinary", error);
    throw new Error("Cloudinary upload failed");
  }
}



export const createSong = async (req, res,next) => {
  try {
    // Ensure both audio and image files have been uploaded
    if (!req.files || !req.files.audioFile || !req.files.imageFile) {
      return res.status(400).json({ message: "No audio or image file uploaded" });
    }

    const { title, artist, albumId, duration } = req.body;
    const audioFile = req.files.audioFile;
    const imageFile = req.files.imageFile;

    const audioUrl = await uploadToCloudinary(audioFile);
    const imageUrl = await uploadToCloudinary(imageFile);
    // Create a new Song document
    const song = new Song({
      title,
      artist,
      audioUrl,
      imageUrl,
      duration,
      albumId: albumId || null
    });

    await song.save();

    // If an albumId is provided, push the song _id into the album's songs array
    if (albumId) {
      await Album.findByIdAndUpdate(albumId, { $push: { songs: song._id } });
    }

    res.status(201).json(song);
  } catch (error) {
    console.log("Error in create song", error);
   next(error);
  }
};


export const deleteSong = async (req, res, next) => {
try{
  const {id} = req.params;

  const song = await Song.findByIdAndDelete(id);
  if(song.albumId){
    await Album.findByIdAndUpdate(song.albumId, {
      $pull: { songs: song._id },
    });
  }
  await Song.findByIdAndDelete(id);
  res.status(200).json({message: "Song deleted successfully"});
}
catch(error){
  console.log("Error in delete song", error);
   next(error);
}

}

export const createAlbum = async (req, res, next) => {
  try{
    const { title, artist,releaseYear} = req.body;
    const  {imageFile} = req.files

    const imageUrl = await uploadToCloudinary(imageFile);
    const album = new Album({
      title,
      artist,
      imageUrl,
      releaseYear
    });
    await album.save();
    res.status(201).json(album);
  }
  catch (error) {
    console.log("Error in create album", error);
    next(error);
  }


 }
export const deleteAlbum = async (req, res, next) => {
  try{
    const {id} = req.params;
    await Song.deleteMany({ albumId : id } );
    await Album.findByIdAndDelete(id);
    res.status(200).json({message: "Album deleted successfully"});

    }
  catch(error){
    console.log("Error in delete album", error);
   next(error);
  }
  
 }

 export const checkAdmin = async(req,res,next) => {
  res.status(200).json({admin : true});
 }