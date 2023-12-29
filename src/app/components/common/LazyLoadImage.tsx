/* eslint-disable @typescript-eslint/ban-types */
import React, { FC } from 'react';
import { Avatar, Box, Skeleton } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { LazyLoadImageProps } from '../../interfaceTypes';

export const LazyLoadImage: FC<LazyLoadImageProps> = ({ height, signedUrl, width, onClickImageHandler, styleProps, alt, isRound }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const onLoadImage = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const { currentTarget } = e;
    const { complete } = currentTarget;
    if (complete) setIsImageLoaded(true);
  };

  return (
    <>
      {!!signedUrl ?
        <Box sx={{ position: 'relative' }}>
          <Box
            onClick={onClickImageHandler}
            component="img"
            src={signedUrl ?? ''}
            height={height}
            width={width}
            alt={alt}
            sx={{
              position: 'relative',
              objectFit: 'contain',
              borderRadius: 50,
              opacity: !isImageLoaded ? 0 : 1,
              transition: 'all .3s ease-in',
              ...styleProps
            }}
            onLoad={onLoadImage}
          />

          {!isImageLoaded && (
            <Box sx={{ position: 'absolute', zIndex: 3, inset: 0, borderRadius: isRound ? 50 : 0 }}>
              <Skeleton variant={isRound ? 'circular' : 'rectangular'} width={width} height={height} sx={{ zIndex: 100000 }} />
            </Box>
          )}
        </Box> :
        <Avatar sx={{ width: '100%', height: '100%' }} src='' />
      }
    </>
  );
};