
const Image = ({ data }) => {
    return (
      
        <img className="h-72 w-full object-cover rounded-lg shadow-md" src={data.urls.small} />
      
    )
  }
  
  export default Image