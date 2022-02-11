import React, { useState } from 'react'
import { Block, GalleryGrid, ImageMarquee, ResponsiveGrid, ReviewQuoteStack } from '@onextech/material-ui-landing/core'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { S3Image } from '@onextech/gvs-kit/core'
import { styled } from '@mui/material/styles'
import RouterLink from 'next/link'
import Layout from '../../components/Layout/Layout'
import landing_icon_1 from '../../../public/images/landing_icon_1.svg'
import landing_icon_2 from '../../../public/images/landing_icon_2.svg'
import landing_icon_3 from '../../../public/images/landing_icon_3.svg'
import review_avatar_1 from '../../../public/images/review_avatar_1.png'
import new_launch from '../../../public/images/new_launch.jpg'
import hdb from '../../../public/images/hdb.jpg'
import landed from '../../../public/images/landed.jpg'
import placeholder from '../../../public/images/placeholder.png'
import photo_placeholder from '../../../public/images/photo_placeholder.png'
import placeholder_hero from '../../../public/images/placeholder_hero.png'
import { routes } from '../../app/routes'

// ================== IMAGES ===================
const landing_icon_1_image = { src: landing_icon_1, alt: '' }
const landing_icon_2_image = { src: landing_icon_2, alt: '' }
const landing_icon_3_image = { src: landing_icon_3, alt: '' }
const placeholder_image = { src: placeholder, alt: '' }
const photo_placeholder_image = { src: photo_placeholder, alt: '' }
const review_avatar_1_image = { src: review_avatar_1, alt: '' }
const new_launch_image = { src: new_launch, alt: '' }
const hdb_image = { src: hdb, alt: '' }
const landed_image = { src: landed, alt: '' }

// ================== MOCKS ====================
const mockImageMarquee = [placeholder_image, placeholder_image, placeholder_image, placeholder_image]
const mockApproaches = [
  {
    image: new_launch_image,
    title: 'New Launch',
    subtitle: 'Leading agency in Residential, Commercial and Industrial New Launches across Singapore.',
  },
  {
    image: landed_image,
    title: 'Resale Properties',
    subtitle: 'Sales and leasing of Residential, Commercial and Industrial properties in the resale market.',
  },
  {
    image: hdb_image,
    title: 'HDB',
    subtitle: 'Sales and leasing of Housing Development Board flats in the resale market.',
  },
]
const mockDifferences = [
  {
    image: landing_icon_1_image,
    title: 'Patterns',
    subtitle: 'Our extensive search network allows us to connect with a wide range of executive professionals.',
  },
  {
    image: landing_icon_2_image,
    title: 'Principles',
    subtitle: 'We are always ready to connect qualified candidates to the approriate executive positions',
  },
  {
    image: landing_icon_3_image,
    title: 'Practices',
    subtitle: 'We have an intimate knowledge of the Real Estate property market in Singapore and Southeast Asia.',
  },
]
const mockGallery = {
  overline: 'Our Take',
  title: 'Fresh. Bold. Modern',
  subtitle: 'Let your site convey the whimsical nature of your product.',
  images: [
    placeholder_image,
    placeholder_image,
    placeholder_image,
    placeholder_image,
    placeholder_image,
    placeholder_image,
  ],
}
const mockAwards = {
  overline: 'Our Take',
  title: 'Fresh. Bold. Modern',
  subtitle: 'Let your site convey the whimsical nature of your product.',
  images: [placeholder_image, placeholder_image],
}
const mockBenefits = [
  {
    image: landing_icon_1_image,
    title: 'Proven Record',
    subtitle:
      'We harness the power of research and data by improving upon tried and tested design solutions, cementing the effectiveness of our design solutions.',
  },
  {
    image: landing_icon_2_image,
    title: 'Career Progression',
    subtitle:
      'At the heart of our innovative designs are fundamental design principles which ensures an optimum balance between diversity and standardisation.',
  },
  {
    image: landing_icon_3_image,
    title: 'Free Training',
    subtitle:
      'We follow the most respected brands and adopt their best practices to ensure our creative solutions achieve it’s competitive edge by learning from the best.',
  },
  {
    image: landing_icon_1_image,
    title: 'Established Platform',
    subtitle:
      'We harness the power of research and data by improving upon tried and tested design solutions, cementing the effectiveness of our design solutions.',
  },
  {
    image: landing_icon_2_image,
    title: 'Effective Systems',
    subtitle:
      'At the heart of our innovative designs are fundamental design principles which ensures an optimum balance between diversity and standardisation.',
  },
  {
    image: landing_icon_3_image,
    title: 'IT Support',
    subtitle:
      'We follow the most respected brands and adopt their best practices to ensure our creative solutions achieve it’s competitive edge by learning from the best.',
  },
]
const mockReviewQuotes = [
  {
    ratingValue: 5,
    image: review_avatar_1_image,
    author: 'Felicia Chong, SRI Associate Director',
    content:
      '“We recently worked with Paul Lim on creating our new mobile app from the ground up. Paul Lim surpassed our expectations. The team felt like a natural extension to our company, working diligently to deliver each phase of the project as if it were their own. They are professional, highly creative, and have been responsive throughout the entire project; the project was meticulously planned out from initial meeting to final delivery, where Paul Lim managed navigate and translate incoherent ideas into concrete designs, with ease.”',
  },
  {
    ratingValue: 5,
    image: review_avatar_1_image,
    author: 'Nicole Tan, SRI Associate',
    content:
      '“First-class team - they completely understood the problems we were trying to solve and brought our vision to life in a beautifully simple way. Would definitely showcase with them again”',
  },
  {
    ratingValue: 5,
    image: review_avatar_1_image,
    author: 'Michelle Lim, SRI Agent',
    content:
      "“Paul Lim is probably the best UI/UX Design studio we've worked with. Apart from being professional and highly creative, their team brought an approach we hadn't seen before. They design for outcome, making sure that our concepts aligned with our goals. Highly recommend them for any digital design showcase.”",
  },
]

// ================== COMPONENTS ===============
const LandingHeaderWithLine = (props) => {
  const { overline, title, subtitle, description, ...rest } = props
  return (
    <Box textAlign="center" {...rest}>
      <Typography variant="overline" color="secondary" component="h2" mb={1}>
        {overline}
      </Typography>
      {title && (
        <Typography variant="h3" color="primary.dark">
          {title}
        </Typography>
      )}
      {subtitle && <Typography variant="h4">{subtitle}</Typography>}
      {description && (
        <Typography variant="body1" mt={2}>
          {description}
        </Typography>
      )}
    </Box>
  )
}

styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
})

/**
 * Create an angular block
 * @link https://css-tricks.com/creating-non-rectangular-headers/
 */
const AngularSvg = styled('svg')({
  width: '100%',
  height: '10vw',
  position: 'absolute',
  left: 0,
  zIndex: 0,
})

const TopSvg = styled(AngularSvg)({
  top: 0,
  marginTop: '-10vw',
})

const BottomSvg = styled(AngularSvg)({
  bottom: 0,
  marginBottom: '-10vw',
  transform: 'rotate(180deg)',
})

// ================== PAGE =====================
const Home: React.FC = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)
  const handleOpenContactDialog = () => {
    setIsContactDialogOpen(true)
  }

  const title = 'SRI Realtors'
  const user = { name: 'debug', email: 'debug', slug: 'debug' }
  const { name, email, slug } = user
  const {
    hero,
    whoWeAre,
    leader,
    difference,
    lifeAt,
    benefits,
    framework,
    whatWeDo,
    awards,
    joinUs,
    contactUs,
  }: any = {}
  const {
    title: differenceTitle,
    firstTitle: differenceFirstTitle,
    firstSubtitle: differenceFirstSubtitle,
    secondTitle: differenceSecondTitle,
    secondSubtitle: differenceSecondSubtitle,
    thirdTitle: differenceThirdTitle,
    thirdSubtitle: differenceThirdSubtitle,
    media: differenceMedia,
  } = difference || {}
  const { title: benefitTitle, media: mediaBenefits } = benefits || {}
  const { title: whatWeDoTitle } = whatWeDo || {}
  const { title: joinUsTitle, media: joinUsMedia } = joinUs || {}

  return (
    <Layout>
      {/* Hero */}
      <Block
        bg={{ src: '/images/hero_1.jpg' }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          color: 'white',
          height: 600,
          display: 'flex',
          flexDirection: 'column',
          pt: 3,
        }}
      >
        <Container>
          <Box position="relative" zIndex={1}>
            <Typography variant="overline">SRI Realtors</Typography>
            <Typography variant="h1">Agents who find you the best homes</Typography>
            <Typography variant="body1" mt={1}>
              Singapore Realtors Inc (SRI)
            </Typography>

            <RouterLink href={routes.REALTORS} passHref>
              <Button variant="contained" size="large" sx={{ mt: 6.25 }}>
                Find Agents
              </Button>
            </RouterLink>
          </Box>
        </Container>
      </Block>

      {/* Intro */}
      <Block bgcolor="background.default" sx={{ position: 'relative' }}>
        <TopSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="#fff" points="0,100 100,0 100,100" />
        </TopSvg>

        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <img src="/images/photo_placeholder.png" />
            </Grid>
            <Grid item xs={12} md={6}>
              <LandingHeaderWithLine
                textAlign="left"
                overline={`We are the ${name} Group`}
                title="Find solutions to all your housing needs"
                description="The brokerage is comprised of a close group of talented realtors, led by the firm’s President and Founder,
            Jason Oppenheim. With more than $1B+ in total sales and $300 million in active listings, the firm closes
            over one hundred deals annually and has brokered many of the City’s largest residential sales, including
            numerous record-breaking transactions."
                mb={4}
              />
            </Grid>
          </Grid>
        </Container>

        <ImageMarquee items={mediaBenefits || mockImageMarquee} mt={10} />
      </Block>

      {/* Difference */}
      <Block reveal>
        <Container maxWidth="md">
          <LandingHeaderWithLine
            overline={`The ${name} Difference`}
            subtitle={
              differenceTitle ||
              `The ${name} Group leverages search expertise, a focus on relationships, and industry knowledge to best serve your needs.`
            }
            mb={4}
          />
        </Container>

        <Container>
          <Grid container spacing={6}>
            {mockDifferences.map((difference, index) => {
              const { title, subtitle, image } = difference
              const nextDifferenceTitle =
                index === 0 ? differenceFirstTitle : index === 1 ? differenceSecondTitle : differenceThirdTitle
              const nextDifferenceSubtitle =
                index === 0 ? differenceFirstSubtitle : index === 1 ? differenceSecondSubtitle : differenceThirdSubtitle
              return (
                <Grid key={title} item xs={12} md={4} textAlign="center">
                  <div>
                    <img height={80} {...(image as any)} />

                    <Typography variant="overline" sx={{ marginTop: { xs: 1, md: 4 } }}>
                      {nextDifferenceTitle || title}
                    </Typography>

                    {nextDifferenceSubtitle ||
                      (subtitle && <Typography variant="body2">{nextDifferenceSubtitle || subtitle}</Typography>)}
                  </div>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </Block>

      {/* Reviews */}
      <Block reveal>
        <Container maxWidth="sm">
          <LandingHeaderWithLine overline="Agent Testimonials" title="Trusted by Agents" mb={8} />

          <ReviewQuoteStack items={mockReviewQuotes} />
        </Container>
      </Block>

      {/* CTA Block */}
      <Block bg={{ src: `${joinUsMedia?.[0] || '/images/hero.jpg'}` }} color="white" middle>
        <Box py={3} textAlign="center">
          <LandingHeaderWithLine overline={`Join the ${name} Group`} title={joinUsTitle || 'Reach out to us'} mb={6} />

          <Button variant="outlined" color="secondary" onClick={handleOpenContactDialog}>
            Contact Us
          </Button>
        </Box>
      </Block>
    </Layout>
  )
}

export default Home
