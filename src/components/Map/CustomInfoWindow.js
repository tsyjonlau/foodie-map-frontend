import React from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

function CustomInfoWindow({ placeDetails }) {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardHeader
                sx={{ padding: 0 }}
                title={<Typography variant='subtitle1'>{placeDetails.name}</Typography>}
                subheader={<Typography variant='subtitle2'>{placeDetails.formatted_address}</Typography>}
            />
            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                    Google Maps rating: {placeDetails.rating}⭐ ({placeDetails.user_ratings_total} ratings)
                </Typography>
                <Link href={placeDetails.url}>Open in Google Maps</Link>
            </CardContent>
            <CardActions>
                <Button variant='contained' startIcon={<BookmarksIcon />}>Save to Bookmarks</Button>
            </CardActions>
      </Card>
    )
}

export default CustomInfoWindow;