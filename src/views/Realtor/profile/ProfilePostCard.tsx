import { useState, useRef } from 'react'
import RouterLink from 'next/link'
import SendIcon from '@mui/icons-material/Send'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import MessageIcon from '@mui/icons-material/Message'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import {
  Box,
  Link,
  Card,
  Stack,
  Paper,
  Avatar,
  Checkbox,
  TextField,
  CardProps,
  Typography,
  CardHeader,
  IconButton,
  AvatarGroup,
  InputAdornment,
  FormControlLabel,
} from '@mui/material'

// ----------------------------------------------------------------------

interface ProfilePostCardProps extends CardProps {
  post: any
}

export default function ProfilePostCard({ post }: ProfilePostCardProps) {
  const user = { displayName: 'Hi' }
  const commentInputRef = useRef<HTMLInputElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isLiked, setLiked] = useState(post.isLiked)
  const [likes, setLikes] = useState(post.personLikes.length)
  const [message, setMessage] = useState('')
  const hasComments = post.comments.length > 0

  const handleLike = () => {
    setLiked(true)
    setLikes((prevLikes) => prevLikes + 1)
  }

  const handleUnlike = () => {
    setLiked(false)
    setLikes((prevLikes) => prevLikes - 1)
  }

  const handleChangeMessage = (value: string) => {
    setMessage(value)
  }

  const handleClickAttach = () => {
    fileInputRef.current?.click()
  }

  const handleClickComment = () => {
    commentInputRef.current?.focus()
  }

  return (
    <Card>
      <CardHeader
        disableTypography
        avatar={<Avatar />}
        title={
          <RouterLink href="#" passHref>
            <Link variant="subtitle2" color="text.primary">
              {user?.displayName}
            </Link>
          </RouterLink>
        }
        subheader={
          <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary' }}>
            {new Date(post.createdAt).toLocaleDateString()}
          </Typography>
        }
        action={
          <IconButton>
            <MoreVertIcon width={20} height={20} />
          </IconButton>
        }
      />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Typography variant="body1">{post.message}</Typography>
        <Box sx={{ position: 'relative', pt: 'calc(100% / 16 * 9)' }}>
          <Box
            component="img"
            alt="post media"
            src={post.media}
            sx={{
              top: 0,
              width: 1,
              height: 1,
              borderRadius: 1,
              objectFit: 'cover',
              position: 'absolute',
            }}
          />
        </Box>

        <Stack direction="row" alignItems="center">
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                color="error"
                checked={isLiked}
                icon={<FavoriteIcon />}
                checkedIcon={<FavoriteIcon />}
                onChange={isLiked ? handleUnlike : handleLike}
              />
            }
            label={likes}
            sx={{ minWidth: 72, mr: 0 }}
          />
          <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
            {post.personLikes.map((person) => (
              <Avatar key={person.name} alt={person.name} src={person.avatarUrl} />
            ))}
          </AvatarGroup>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={handleClickComment}>
            <MessageIcon width={20} height={20} />
          </IconButton>
          <IconButton>
            <ShareIcon width={20} height={20} />
          </IconButton>
        </Stack>

        {hasComments && (
          <Stack spacing={1.5}>
            {post.comments.map((comment) => (
              <Stack key={comment.id} direction="row" spacing={2}>
                <Avatar alt={comment.author.name} src={comment.author.avatarUrl} />
                <Paper sx={{ p: 1.5, flexGrow: 1, bgcolor: 'background.neutral' }}>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    alignItems={{ sm: 'center' }}
                    justifyContent="space-between"
                    sx={{ mb: 0.5 }}
                  >
                    <Typography variant="subtitle2">{comment.author.name}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {comment.message}
                  </Typography>
                </Paper>
              </Stack>
            ))}
          </Stack>
        )}

        <Stack direction="row" alignItems="center">
          <Avatar />
          <TextField
            fullWidth
            size="small"
            value={message}
            inputRef={commentInputRef}
            placeholder="Write a comment…"
            onChange={(event) => handleChangeMessage(event.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={handleClickAttach}>
                    <AddPhotoAlternateIcon width={24} height={24} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              ml: 2,
              mr: 1,
              '& fieldset': {
                borderWidth: `1px !important`,
                borderColor: (theme) => `${theme.palette.grey[500_32]} !important`,
              },
            }}
          />
          <IconButton>
            <SendIcon width={24} height={24} />
          </IconButton>
          <input type="file" ref={fileInputRef} style={{ display: 'none' }} />
        </Stack>
      </Stack>
    </Card>
  )
}
