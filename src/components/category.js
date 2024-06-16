import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Check2, X } from 'react-bootstrap-icons';
import { ToastContainer, toast } from 'react-toastify';



import Axios from 'axios';

import Header from './header';

const CategoryContainer = () => {
  const { category } = useParams();

  const [newsData, setNewsData] = useState([]);

  const fetchNewsData = () => {

    const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

    
    Axios.get(`http://127.0.0.1:8000/api/category/${capitalizedCategory}/`)
      .then((response) => {

        console.log('API response:', response);
        setNewsData(response.data);
        console.log('News data:', response.data);
        console.log(response.data.length);    

      })
      .catch((error) => {

        console.error('Error', error);

      }
    );

  }
  
  useEffect(() => {
    console.log('Category:', category);
    fetchNewsData();
    
  }, [category]);

  const rows = [];
  for (let i = 0; i < newsData.length; i += 4) {
    rows.push(newsData.slice(i, i + 4));
  }
  console.log(newsData);
  console.log(rows);


  return (
    <>
      <Header activeContainer={1}/>
      {/* const numberOfNews = newsData.length; */}
      { newsData.length >= 1 ? (
          <Container className='new-news-container'>

      <Row className='news-row'>
          {rows.map((row, rowIndex) => (
            <Row key={rowIndex}>
              {row.map((newsItem, colIndex) => (
            <Col
            className={`KashishLakshay ${newsItem.prediction ? 'real-news' : 'fake-news'}`}
            key={colIndex}
            xs={12}
            md={3}
            >
            <div>
            <div className='div-ipsdf'>
              {newsItem.img_url !== 'None' && (
                <Row>
                  <img
                    src={newsItem.img_url}
                    width={500}
                    height={200}
                    alt={`Image ${colIndex}`}

                  />
                </Row>
              )}
              <a href={newsItem.web_url} className="news-link">
                <h5>{newsItem.title}</h5>
              </a>
            </div>
              <div className='div-kjpql'>
                <div>
                  {`${new Date(newsItem.publication_date).getDate()}/${
                    new Date(newsItem.publication_date).getMonth() + 1
                  }/${new Date(newsItem.publication_date).getFullYear()} ${
                    new Date(newsItem.publication_date).getHours()
                  }:${new Date(newsItem.publication_date).getMinutes()}`}
                </div>
                <div className='div-kpqsa'>
                  {newsItem.prediction === true ? (
                    <div className='real-news-prediction'>
                      <Check2 /> Predicted as Real News
                    </div>
                  ) : (
                    <div className='fake-news-prediction'>
                      <X /> Predicted as Fake News
                    </div>
                  )}
                </div>
              </div>
            </div>
            </Col>
              ))}
            </Row>
          ))}
        </Row>
        </Container>
        ):
        "Not Enough news to display"
      }

      <ToastContainer />
    </>
  );
};


export default CategoryContainer;
