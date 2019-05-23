import React from 'react'
import { connect } from 'react-redux';
import {findMovie} from '../../redux/getMovies'
import { Card, Icon, Image } from 'semantic-ui-react'
import { StyledHeader, InnerWrapper, OuterWrapper } from './movieResultsStyles';
import BasicSearch from '../../shared/BasicSearch/BasicSearch';

const MovieResults = ({results})=> {

  const handleFavorite = () => {

  }

  console.log(results);
  const resArr = Object.values(results)
  // console.log(resArr)
  return (
    <OuterWrapper>
    <BasicSearch  />
    <InnerWrapper >
      { results === {} ? '' :
        resArr.map((result, i) => (
          <div key={i}>
          <Card>
            <Image src={`https://image.tmdb.org/t/p/original${result.poster_path}`} loading='lazy' alt='movie poster' wrapped ui={false}/>
            <Card.Content>
            <Card.Header>
              <StyledHeader>
                <span>{result.title ? result.title : result.original_name}</span>
                <Icon name={`star outline`} onClick={handleFavorite} />
              </StyledHeader>
            </Card.Header>
            <Card.Meta>
              <span className='date'>Release Date: {result.release_date ? result.release_date : 'Unknown'}</span>
            </Card.Meta>
            <Card.Description>
              {result.overview && result.overview.length > 35 ? result.overview.slice(0,35) + '...' : result.overview}
            </Card.Description>
            </Card.Content>
          </Card>
          </div>
        ))
      }
    </InnerWrapper>
    </OuterWrapper>
  )
}
const mapStateToProps = ({getMovies : {value}}) => {
  return {results : value.results}
}
export default connect(mapStateToProps)(MovieResults);

