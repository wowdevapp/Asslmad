import Grid from '@mui/material/Grid';
import { Container } from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";


export default function Home() {
  const isEmpty = false;

  const courses = [{
    id: 1,
    title: 'course 1',
    description: 'test des',
    imageSrc: 'https://picsum.photos/200',
    createdAt: '2017-07-07',
    category: 'sport',
    roomCount: 5,
    bathroomCount: 5,
    guestCount: 4,
    locationValue: 'MA',
    userId: 12,
    price: 34
  },
  {
    id: 1,
    title: 'course 1',
    description: 'test des',
    imageSrc: 'https://picsum.photos/200',
    createdAt: '2017-07-07',
    category: 'sport',
    roomCount: 5,
    bathroomCount: 5,
    guestCount: 4,
    locationValue: 'MA',
    userId: 12,
    price: 34
  },
  {
    id: 1,
    title: 'course 1',
    description: 'test des',
    imageSrc: 'https://picsum.photos/200',
    createdAt: '2017-07-07',
    category: 'sport',
    roomCount: 5,
    bathroomCount: 5,
    guestCount: 4,
    locationValue: 'MA',
    userId: 12,
    price: 34
  },
  {
    id: 1,
    title: 'course 1',
    description: 'test des',
    imageSrc: 'https://picsum.photos/200',
    createdAt: '2017-07-07',
    category: 'sport',
    roomCount: 5,
    bathroomCount: 5,
    guestCount: 4,
    locationValue: 'MA',
    userId: 12,
    price: 34
  },
  {
    id: 1,
    title: 'course 1',
    description: 'test des',
    imageSrc: 'https://picsum.photos/200',
    createdAt: '2017-07-07',
    category: 'sport',
    roomCount: 5,
    bathroomCount: 5,
    guestCount: 4,
    locationValue: 'MA',
    userId: 12,
    price: 34
  },
  {
    id: 1,
    title: 'course 1',
    description: 'test des',
    imageSrc: 'https://picsum.photos/200',
    createdAt: '2017-07-07',
    category: 'sport',
    roomCount: 5,
    bathroomCount: 5,
    guestCount: 4,
    locationValue: 'MA',
    userId: 12,
    price: 34
  }]
  if (isEmpty) {
    return (
      <EmptyState />
    )
  }
  return (
    <Container>
      <div className='pt-24'>
        <Grid container rowSpacing={4} spacing={4}>
          {
            courses.map((course: any) => {
              return (
                <Grid  key={course.id} item xs={3} md={3} >
                  <ListingCard
                    key={course.id}
                    data={course}
                    reservation={{ 'startDate': '5/29/2023', 'endDate': '2/29/2023', totalPrice: 234 }}
                  />
                </Grid>

              )
            })
          }
        </Grid>
      </div>
    </Container>
  )
}
