import RestaurantCard from './RestaurantCard.js';
import resList from '../utils/mockData.js';

const Body = () => {
    return (
      <div className="body">
        <div className="filter">
            {/* <button className='filter-btn'
            onClick={() => {
              resList = resList.filter(
                {res} => res.data.avgRating > 4
              );
            }}
            >
              Top Rated Restaurants
            </button> */}
        </div>
        <div className="res-container">
          {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} />
          <RestaurantCard resData={resList[3]} />
          <RestaurantCard resData={resList[4]} />
          <RestaurantCard resData={resList[5]} />
          <RestaurantCard resData={resList[6]} />
          <RestaurantCard resData={resList[7]} />
          <RestaurantCard resData={resList[8]} />
          <RestaurantCard resData={resList[9]} />
          <RestaurantCard resData={resList[10]} />
          <RestaurantCard resData={resList[11]} />
          <RestaurantCard resData={resList[12]} /> */}
  
          {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}
  
          {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
  
          {/* // * or */}
  
          {/* // * We can also use index as the key to the JSX child elemnt - which is the 2nd parameter of the map() method, but is not a recommended practice - react official Docs declared this/}
  
          {resList.map((restaurant, index) => (
            <RestaurantCard key={index} resData={restaurant} />
          ))}
  
          {/* // * Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.
           */}
        </div>
      </div>
    );
  };

  export default Body;