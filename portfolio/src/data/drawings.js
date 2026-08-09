const drawingImages = import.meta.glob(
  "../assets/drawings/*",
  {
    eager: true,
    import: "default",
  }
);

const drawings = Object.entries(drawingImages).map(
  ([path, image], index) => {

    const filename = path
      .split("/")
      .pop()
      .replace(/\.[^/.]+$/, "");

    return {
      id: index + 1,
      title: filename,
      type: "Architectural Drawing",
      image: image,
    };
  }
);

console.log("Architectural drawings:", drawings);

export default drawings;