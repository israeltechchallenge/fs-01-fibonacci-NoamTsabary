const sortResults = (key) => {
    switch (key) {
      case "numberAscending":
        resultsList.sort((a,b) => {
          return b.number - a.number;
        });
        break;
      case "numberDescending":
        resultsList.sort((a,b) => {
          return a.number - b.number;
        });
        break;
      case "dateAscending":
        resultsList.sort((a,b) => {
          return a.createdDate - b.createdDate;
        });
        break;
      case "dateDescending":
        resultsList.sort((a,b) => {
          return b.createdDate - a.createdDate;
        });
        break;
      default:
        throw new Error ("No key received in sortResults")
    }
    createResultsHTML(resultsList);
  }
  
  document.getElementById('test').addEventListener('click', (e) => {
    sortResults(e.target.id);
  });