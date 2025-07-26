import { Card, CardContent, Typography, Button, Stack } from "@mui/material";
import Link from "next/link";

type Props = {
  trip: {
    _id: string;
    title: string;
    destination: string;
    days: number;
    budget: number;
    createdAt: string;
  };
};

export default function TripCard({ trip }: Props) {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{trip.title}</Typography>
        <Typography>Destination: {trip.destination}</Typography>
        <Typography>Days: {trip.days}</Typography>
        <Typography>Budget: ₹{trip.budget}</Typography>
        <Stack mt={2} direction="row">
          <Link href={`/edit/${trip._id}`}>
            <Button variant="outlined">Edit</Button>
          </Link>
        </Stack>
      </CardContent>
    </Card>
  );
}

