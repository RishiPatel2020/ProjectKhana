import Carousel from 'react-bootstrap/Carousel';
import './AnimatedBoxes.css'; 


function AnimatedBoxes() {
   
    return (
        <Carousel variant="dark" fade >
          <Carousel.Item>

    
        

             <div className="row">
            <div className="column">
                <img src={require("../../Resources/thali2.png")}  alt="Snow" width={"50%"}/>
            </div>
            <div className="column" style={{textAlign:"left"}}>

                <h5>First Meal</h5>
                <p style={{fontSize:"18px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cumque consequuntur quas consequatur officiis, itaque enim saepe pariatur repellat iusto neque praesentium porro illum, ipsa accusantium reprehenderit deleniti voluptas, dolore eveniet sunt animi in? Nobis, dolores? Officia dicta beatae, tempora consequuntur facilis doloremque quam fugiat qui dignissimos. Quam quaerat, quisquam beatae aspernatur reprehenderit fugit rerum, commodi dicta ipsam quibusdam nulla, et quis magni explicabo animi facilis est mollitia expedita nam.</p>
            </div>
            
            </div> 


            




           

           

           

                


          
           
          </Carousel.Item>
          <Carousel.Item>


          <div className="row">
            <div className="column">
                <img src={require("../../Resources/thali2.png")}  alt="Snow" width={"50%"}/>
            </div>
            <div className="column" style={{textAlign:"left"}}>

                <h5>Second Meal</h5>
                <p style={{fontSize:"18px"}}>Lorem ipsum dolor sit amet. In iste ullam qui dolorem eveniet est provident quasi in labore itaque qui tempore itaque et sunt ipsam? Qui nihil quia in neque ipsa aut rerum sint ut enim esse ut quia vero eum eveniet fuga. Hic voluptates sint ea ipsum magni 33 provident labore. Eos mollitia adipisci rem omnis ratione id quia enim.

Est sapiente tempora est quia veritatis in amet impedit in necessitatibus provident est consequuntur reiciendis sed expedita corporis est cupiditate fugit. Id voluptatem enim non nihil animi et fuga omnis et quia unde id veritatis velit.

Et autem dolore ut iure officia est accusantium possimus sed doloremque quia sed minus maiores. Id voluptas voluptas est odio eligendi qui corporis tenetur et internos ipsa sit quidem rerum ea ipsum omnis aut neque voluptatem. Et harum magni vel voluptatem ducimus non sint molestiae.</p>
            </div>
            
            </div>


          </Carousel.Item>
          <Carousel.Item>
            
          

          <div className="row">
            <div className="column">
                <img src={require("../../Resources/thali3.png")}  alt="Snow" width={"50%"}/>
            </div>
            <div className="column" style={{textAlign:"left"}}>

                <h5>Third Meal</h5>
                <p style={{fontSize:"18px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cumque consequuntur quas consequatur officiis, itaque enim saepe pariatur repellat iusto neque praesentium porro illum, ipsa accusantium reprehenderit deleniti voluptas, dolore eveniet sunt animi in? Nobis, dolores? Officia dicta beatae, tempora consequuntur facilis doloremque quam fugiat qui dignissimos. Quam quaerat, quisquam beatae aspernatur reprehenderit fugit rerum, commodi dicta ipsam quibusdam nulla, et quis magni explicabo animi facilis est mollitia expedita nam.</p>
            </div>
            
            </div>


          </Carousel.Item>
        </Carousel>
      );
}

export default AnimatedBoxes;