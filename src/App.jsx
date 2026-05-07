import { useState } from "react";
import ResourceCard from "./components/ResourceCard";
import SearchFilter from "./components/SearchFilter";
import resources from "./data/resources.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("All Pakistan");
  const [selectedType, setSelectedType] = useState("");
  const [selectedFree, setSelectedFree] = useState("");
  const [showUrdu, setShowUrdu] = useState(false);

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      searchTerm === "" ||
      resource.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesProvince =
      selectedProvince === "All Pakistan" ||
      resource.province === selectedProvince;

    const matchesType = selectedType === "" || resource.type === selectedType;

    const matchesFree =
      selectedFree === "" || (selectedFree === "free" && resource.free);

    return matchesSearch && matchesProvince && matchesType && matchesFree;
  });

  return (
    <div className="container">
      <header className="header">
        <div className="lang-toggle">
          <button
            onClick={() => setShowUrdu(false)}
            style={{
              background: showUrdu ? "transparent" : "rgba(255,255,255,0.25)",
              color: "white",
              fontWeight: showUrdu ? "500" : "600",
              boxShadow: showUrdu ? "none" : "0 1px 3px rgba(0,0,0,0.15)",
            }}
          >
            English
          </button>
          <button
            onClick={() => setShowUrdu(true)}
            style={{
              background: showUrdu ? "rgba(255,255,255,0.25)" : "transparent",
              color: "white",
              fontWeight: showUrdu ? "600" : "500",
              boxShadow: showUrdu ? "0 1px 3px rgba(0,0,0,0.15)" : "none",
            }}
          >
            اردو
          </button>
        </div>
        <div className="header-content">
          <h1>Pakistan Mental Health Resource Directory</h1>
          <p>Find mental health support services across Pakistan</p>
          {showUrdu && (
            <span className="urdu">
              پاکستان میں ذہنی صحت کی مدد کے وسائل تلاش کریں
            </span>
          )}
        </div>
      </header>

      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedProvince={selectedProvince}
        onProvinceChange={setSelectedProvince}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        selectedFree={selectedFree}
        onFreeChange={setSelectedFree}
        resultCount={filteredResources.length}
      />

      {filteredResources.length === 0 ? (
        <div className="no-results">
          <h3>No resources found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="cards-grid">
          {filteredResources.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              showUrdu={showUrdu}
            />
          ))}
        </div>
      )}

      <footer className="footer">
        <p>Pakistan Mental Health Resource Directory © 2026</p>
        <p style={{ marginTop: "0.5rem" }}>
          If you or someone you know is in crisis, please seek immediate help
        </p>
      </footer>
    </div>
  );
}

export default App;
