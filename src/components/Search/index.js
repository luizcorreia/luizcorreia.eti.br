import React from 'react'
import PropTypes from 'prop-types'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, Configure, useStats } from 'react-instantsearch'

import Hit from './Hit'
import * as S from './styled'

const Stats = () => {
  const { nbHits, processingTimeMS } = useStats()
  return (
    <p>
      {nbHits === 1
        ? `${nbHits} resultado encontrado em ${processingTimeMS}ms`
        : `${nbHits} resultados encontrados em ${processingTimeMS}ms`}
    </p>
  )
}

const Search = ({ algolia }) => {
  if (!algolia || !algolia.appId) return null

  const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

  return (
    <S.SearchWrapper>
      <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
        <Configure hitsPerPage={200} distinct />
        <SearchBox placeholder="Pesquisar..." />
        <Stats />
        <Hits hitComponent={Hit} />
      </InstantSearch>
      <S.SearchTitle>
        Powered by Algolia
        <S.AlgoliaIcon />
      </S.SearchTitle>
    </S.SearchWrapper>
  )
}

Search.propTypes = {
  algolia: PropTypes.object.isRequired
}

export default Search
