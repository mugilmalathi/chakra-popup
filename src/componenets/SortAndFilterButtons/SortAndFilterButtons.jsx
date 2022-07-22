export const SortAndFilterButtons = ({ handleSort }) => {
  return (
    <div className="sortButtons" style={{ display: "flex", justifyContent: "space-around", padding: "10px", marginBottom: "15px" }}>
      <button style={{
        width: '150px',height: '30px', backgroundColor: "orange", border: '1px solid orange', color: 'white', cursor: 'pointer'
      }} onClick={() => handleSort("name", 1)} className="sortByTitleAsc">Sort by Name Asc</button>
      <button style={{
        width: '150px',
        height: '30px',
        backgroundColor: "orange",
        border: '1px solid orange',
        color: 'white',
        cursor: 'pointer'
      }} onClick={() => handleSort("name", -1)} className="sortByTitleDesc">Sort by  Name Desc</button>
      <button style={{
        width: '150px',
        height: '30px',
        backgroundColor: "orange",
        border: '1px solid orange',
        color: 'white',
        cursor: 'pointer'
      }} onClick={() => handleSort("salary", 1)} className="sortByPriceAsc">Sort by Salary Asc</button>
      <button style={{
        width: '150px',
        height: '30px',
        backgroundColor: "orange",
        border: '1px solid orange',
        color: 'white',
        cursor: 'pointer'
      }} onClick={() => handleSort("salary", -1)} className="sortByPriceDesc">Sort by Salary Desc</button> 
    </div>
  );
};
