const { db } = require("./util/admin");

exports.videos = async (req, res) => {
  const videosRef = db.collection("videos");
  try {
    videosRef.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      return res.status(201).json(data);
    });
  } catch (error) {
    return res
      .status(500)
      .json({ general: "Something went wrong, please try again" });
  }
};
