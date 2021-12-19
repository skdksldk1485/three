import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { findData } from "./api/findAPI";
import Animal from './component/Animal';
import Animal2 from './component/Animal2';

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
  height: 100px;
  background-color: black;
  color: white;
  font-size: 1.8rem;
  text-align: center;
`;

const List = styled.div`
  width: 50%;
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 60px;
  font-size: 1.8rem;
  text-align: center;
`;

const List2 = styled.div`
  margin-top: 100px;
  display: grid;  
  grid-template-columns: 1fr;
  justify-content: center;
  width: 50%;
  font-size: 1.8rem;
  text-align: center;
  border: 1px solid black;
  padding: 60px 60px;
  height: 80%;
  font-family: bold;
`;

const List3 = styled.div`
  margin-top: 100px;
  display: grid;  
  grid-template-columns: 1fr;
  justify-content: center;
  width: 50%;
  font-size: 1.8rem;
  text-align: center;
  border: 1px solid black;
  padding: 60px 60px;
  height: 10%;
`;

const Container = styled.div`
  display: flex;
  padding: 0 60px;
  font-size: 1.8rem;
  text-align: center;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column; /*수직 정렬*/
  font-size: 1.8rem;
  text-align: center;
`;

const Loader = styled.div`
  margin-top: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
  height: 100px;
  color: black;
  font-size: 1.8rem;
  text-align: center;
`;

const Main = () => {

  const [animal, setAnimal] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {

        const locations = await findData();

        setAnimal(locations);

        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

  }, []);


  const renderAnimal = () => {
    const animals = animal.map(animal => {
      return <Animal
        id={animal.id}
        title={animal.name}
        poster={animal.img_url}
      />
    })
    return animals;
 };

 const renderAnimalInfo = () => {
  const AnimalInfo = animal.map(animal => {
    return <Animal2
      id={animal.id}
      title={animal.name}
      poster={animal.img_url}
    />
  })
  return AnimalInfo;
};

  return (  
    <>
      <Nav>
        내가 좋아하는 동물
      </Nav>

      {!loading && (
        <Container>
          <Loader>로딩중...</Loader>
        </Container>
      )}

      {loading && (
        <Container>
          <List>
          { renderAnimal() }
          </List>
          <Container2>
            <List2>
            { renderAnimalInfo() }
            </List2>
            <List3>
              <Link className='product' to={`/classification`}>
              좋아하는 동물 나누기
              </Link>
            </List3>
          </Container2>
        </Container>)}
    </>
  );
};

export default Main;
