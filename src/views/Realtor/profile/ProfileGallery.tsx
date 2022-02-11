import { findIndex } from 'lodash'
import { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { alpha, styled } from '@mui/material/styles'
import { Box, Grid, Card, IconButton, Typography, CardContent } from '@mui/material'
import LightboxModal from '../../../components/LightboxModal'

// ----------------------------------------------------------------------

const CaptionStyle = styled(CardContent)(({ theme }) => ({
  bottom: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  backdropFilter: 'blur(3px)',
  WebkitBackdropFilter: 'blur(3px)', // Fix on Mobile
  justifyContent: 'space-between',
  color: theme.palette.common.white,
  backgroundColor: alpha(theme.palette.grey[900], 0.72),
  borderBottomLeftRadius: theme.shape.borderRadius,
  borderBottomRightRadius: theme.shape.borderRadius,
}))

const GalleryImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
})

type GalleryItemProps = {
  image: any
  onOpenLightbox: (value: string) => void
}

function GalleryItem({ image, onOpenLightbox }: GalleryItemProps) {
  const { imageUrl, title, postAt } = image
  return (
    <Card sx={{ pt: '100%', cursor: 'pointer' }}>
      <GalleryImgStyle alt="gallery image" src={imageUrl} onClick={() => onOpenLightbox(imageUrl)} />

      <CaptionStyle>
        <div>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="body2" sx={{ opacity: 0.72 }}>
            {new Date(postAt).toLocaleDateString()}
          </Typography>
        </div>
        <IconButton color="inherit">
          <MoreVertIcon width={20} height={20} />
        </IconButton>
      </CaptionStyle>
    </Card>
  )
}

type ProfileGalleryProps = {
  gallery: any[]
}

export default function ProfileGallery({ gallery }: ProfileGalleryProps) {
  const [openLightbox, setOpenLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number>(0)
  const imagesLightbox = gallery.map((img) => img.imageUrl)

  const handleOpenLightbox = (url: string) => {
    const selectedImage = findIndex(imagesLightbox, (index) => index === url)
    setOpenLightbox(true)
    setSelectedImage(selectedImage)
  }
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Gallery
      </Typography>

      <Card sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {gallery.map((image) => (
            <Grid key={image.id} item xs={12} sm={6} md={4}>
              <GalleryItem image={image} onOpenLightbox={handleOpenLightbox} />
            </Grid>
          ))}
        </Grid>

        <LightboxModal
          images={imagesLightbox}
          photoIndex={selectedImage}
          setPhotoIndex={setSelectedImage}
          isOpen={openLightbox}
          onClose={() => setOpenLightbox(false)}
        />
      </Card>
    </Box>
  )
}
