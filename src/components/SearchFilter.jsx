import React from "react";

const SearchFilter = ({
  searchTerm,
  onSearchChange,
  selectedProvince,
  onProvinceChange,
  selectedType,
  onTypeChange,
  selectedFree,
  onFreeChange,
  resultCount,
}) => {
  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by city or organization name..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="filters">
        <div className="filter-group">
          <label>Province</label>
          <select
            value={selectedProvince}
            onChange={(e) => onProvinceChange(e.target.value)}
          >
            <option value="All Pakistan">All Pakistan</option>
            <option value="Punjab">Punjab</option>
            <option value="Sindh">Sindh</option>
            <option value="KPK">KPK</option>
            <option value="Balochistan">Balochistan</option>
            <option value="Federal">Federal (Islamabad)</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Type</label>
          <select
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="helpline">Helpline</option>
            <option value="ngo">NGO</option>
            <option value="hospital">Hospital</option>
            <option value="online">Online</option>
            <option value="therapist">Therapist</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Cost</label>
          <select
            value={selectedFree}
            onChange={(e) => onFreeChange(e.target.value)}
          >
            <option value="">All</option>
            <option value="free">Free Only</option>
          </select>
        </div>
      </div>

      <p className="results-count">{resultCount} resources found</p>
    </div>
  );
};

export default SearchFilter;
