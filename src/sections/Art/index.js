import { useEffect, useState } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {
  const [artData, setArtData] = useState([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks?page=1&limit=10")
      .then((res) => res.json())
      .then((gallery) => setArtData(gallery.data));
  }, []);
  
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        {/* show list of art here*/}
        <ArtList artData={artData} />
      </div>
    </section>
  );
}

export default ArtsSection;
