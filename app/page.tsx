import Button from '@mui/material/Button';
import { Container } from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";

export default function Home() {
  const isEmpty = false;

  const courses =[{
  id:1,
  title:'course 1',
  description:'test des',
  imageSrc :'https://picsum.photos/200',
  createdAt :'2017-07-07',
  category  :'sport',
  roomCount :5,
  bathroomCount :5,
  guestCount :4,
  locationValue :'MA',
  userId :12,
  price:34 
}]
  if(isEmpty) {
    return (
      <EmptyState />
    )
  }
  return (
    <Container>
      <div 
        className="
          pt-24
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
       
       {
        courses.map((course:any)=>{
          return (
            <ListingCard
               key={course.id}
               data={course}
               reservation={{'startDate': '5/29/2023','endDate': '2/29/2023',totalPrice:234}}
            />
            
          )
        })
       }
       <div>
        <Button variant="contained">Hello World</Button>;
       </div>
      </div>
    </Container>
  )
}
