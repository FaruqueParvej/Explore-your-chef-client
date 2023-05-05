import Carousel from 'react-bootstrap/Carousel';

const CarouselSection = () => {
    return (
        <div className='my-3 rounded w-50 mx-auto'>
          <h1 className='text-center bg-warning p-2 p-sm-4 rounded m-sm-4'>
            3 Popular American Dish
          </h1>
           <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 rounded"
          src={"https://www.tasteofhome.com/wp-content/uploads/2018/01/Creamy-Macaroni-and-Cheese_EXPS_DIYD20_36217_B09_30_1b-3.jpg?resize=696,696"}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Creamy Macaroni and Cheese</h3>
          <p>This is the ultimate creamy mac and cheese recipe. It’s saucy, thick and very rich, with a wonderful cheddar flavor. Once you taste it, you’ll be hooked. —Cindy Hartley, Chesapeake, Virginia</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={"https://www.tasteofhome.com/wp-content/uploads/2019/08/Pressure-Cooker-Philly-Cheesesteak-Sandwiches_EXPS_TOHON19_229309_B06_05_3b-4.jpg?resize=696,696"}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Pressure-Cooker Philly Cheesesteak Sandwiches</h3>
          <p>Melt-in-your-mouth delicious! For this steak and cheese recipe, I like to saute extra onions and green pepper just until they are al dente to add to the top of the meat before melting the cheese. —Kimberly Wallace, Dennison, Ohio</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://www.tasteofhome.com/wp-content/uploads/2020/12/Sticky-Honey-Chicken-Wings_EXPS_HCA21_169958_B10_15_5b.jpg?resize=768,768"}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Sticky Honey Chicken Wings</h3>
          <p>
          This honey chicken wings recipe was given to me by a special lady who was like a grandmother to me. —Marisa Raponi, Vaughan, Ontario
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
        </div>
    );
};

export default CarouselSection;