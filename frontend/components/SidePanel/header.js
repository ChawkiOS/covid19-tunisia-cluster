import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { getIcon } from '../../util/parse'
import { SearchInput } from '../UI/search-input'
import { setSearchTerm } from '../Redux/actions'

const Container = styled.div`
  font-family: 'Lato', sans-serif;
  user-select: none;
`

const Title = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: #2c3e50;
`

const Dot = styled.div`
  color: #eb5757;
  font-size: 28px;
  transform: translateY(3px);
  display: inline-block;
  font-weight: bold;
`

const PatientContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  height: 10vh;
  padding: 15px;
  padding-left: 0;
  user-select: text;
`

const Image = styled.img`
  height: 90%;
`

const Name = styled.div`
  display: flex;
  align-items: center;
  font-size: 32px;
`

function Header({ patient, setSearchTerm }) {

  const onSearch = (term) => {
  let _serchTerm = term.toUpperCase().replace(/P/g, "").trim();
    setSearchTerm(parseInt(_serchTerm))

  }

  const { patientId } = patient

  return (
    <Container>
      <Title>
        COVID-19 <Dot>&nbsp;&middot;&nbsp;</Dot> Réseau de propagation de la pandémie en Tunisie
      </Title>
        <hr/>
      <SearchInput searchTerm={onSearch} />
      <PatientContainer>
        <Image src={getIcon(patient)} />
        <Name>Cas {patientId.toString().substring(2)}</Name>
      </PatientContainer>
    </Container>
  )
}

export default connect(null, {
  setSearchTerm
})(Header)