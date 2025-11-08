import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion';


const API_URL = 'https://6900d2e3ff8d792314bba4e4.mockapi.io/api/Products';

const DescriptionPage = () => {
  const images = [
    `${process.env.PUBLIC_URL}/images/hexa.jpg`,    
    `${process.env.PUBLIC_URL}/images/arrowWide.jpg`,
    `${process.env.PUBLIC_URL}/images/arcPuca.jpg`,
    `${process.env.PUBLIC_URL}/images/trenza.jpeg`,
    `${process.env.PUBLIC_URL}/images/arrow.jpg`,
    `${process.env.PUBLIC_URL}/images/earrings1.png`,
    `${process.env.PUBLIC_URL}/images/male.jpg`,
    `${process.env.PUBLIC_URL}/images/oroAncho.jpg`,
    `${process.env.PUBLIC_URL}/images/tila_male.jpg`,
    `${process.env.PUBLIC_URL}/images/watchband.jpg`,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    let next = currentIndex + 1;
    if (next >= images.length) {
      next = 0;
    }
    setCurrentIndex(next);
  };

  const prevImage = () => {
    let prev = currentIndex - 1;
    if (prev < 0) {
        prev = images.length - 1;
    }
    setCurrentIndex(prev);
  };

const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const[formData, setFormData] = useState({
    title: '',
    image: '',
    description: '',
    price: ''
  });
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    }
    catch (error){
      console.error('Ошибка загрузки:', error);
      setLoading(false);
    }
  }



  const openImageModal = (imageUrl) => {
  setModalImage(imageUrl);
};




  return (
    <div>
      <div  id="aboutSection" className='row'>
        <div className='col-12'>
          <h2 className='text-center mb-5'>Обо мне</h2>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-md-12'>
          <div className='card shadow-lg border-0' style={{
            borderRadius: '15px',
            overflow: 'hidden'
          }}>
            <div className='card-body p-0'>
              <div className='row g-0'>
                <div className='col-md-'>
                  <div className='h-100 d-flex align-items-center justify-content-center' 
                    style={{background: 'linear-gradient(135deg, #fd9001ff 0%, #000000ff 100%)'}}>
                      <div className='text-center p-4'>
                        <img
                        src={`${process.env.PUBLIC_URL}/images/me.jpg`}
                        alt="me"
                        className='img-fluid rounded-circle shadow-lg mb-3'
                        style={{
                            width: '400px',
                            height: '400px',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease'
                            
                        }}
                        onMouseEnter={(event) => event.target.style.transform = 'scale(1.2)'}
                        onMouseLeave={(event) => event.target.style.transform = 'scale(1)'}
                        />
                        <h4 className='text-white mb-0'>Alla Reizenfeldt</h4>
                        <p className='text-white'>Дизайнер</p>
                      </div>
                    </div>

                  </div>
                <div className='col-md-'>
                  <div className='p-3'>
                    <div className='mb-4'>
                      <div className='card'>
                        <div className='card-body'>
                          <p className='card-text mb-1'>Привет! Познакомимся? Я Алла - создательница и дизайнер украшений ручной работы A.Reizenfeldt. Родилась в Москве, с ранних лет увлекалась искусством: занималась танцами, музыкой, рукоделием. Творческая натура и любовь к эстетике нашли отражение в каждом моем изделии. После переезда в Мексику впитала яркие краски, солнечное тепло и богатство местной культуры, что вдохновило меня на создание уникальных украшений, наполненных жизнью и энергией. Обладая дипломом архитектора, использую свои знания для гармоничного сочетания форм, текстур и цветов, создавая украшения, которые подчеркивают красоту и характер каждого человека. Сейчас вернулась в Россию с желанием делиться теплом, любовью и яркостью своих работ. Через свои украшения я стремлюсь передать светлое настроение, энергию солнца и богатство культурных традиций, чтобы каждый человек мог почувствовать себя особенным. A.Reizenfeldt - это не просто украшения, а искусство, созданное с любовью и вдохновением.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div  id="examplesSection">
                  <div className='container'>
                    <h2 className='text-center mb-4'>Работы</h2>
                    <div className='card mb-3'>
                      <div className='card-body'>
                        <div className='position-relative'>
                          <img
                            src={images[currentIndex]}
                            alt={`Слайд ${currentIndex}`}
                            className='w-100 img-fluid '
                            style={{height: '500px', objectFit: 'scale-down'}}/>
                            <button
                            className='btn btn-warning position-absolute top-50 start-0 translate-middle-y'
                            onClick={prevImage}
                            >
                              ◀
                            </button>
                            <button
                            className='btn btn-warning position-absolute top-50 end-0 translate-middle-y'
                            onClick={nextImage}
                            >
                              ▶
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div  id="productsSection">
                  <h2 className='text-center mb-4'>Товары</h2>
                    
                      
                  <div className='row g-3'>
                    {modalImage && (
                    <div
                      style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', zIndex: 1000
                      }}
                      onClick={() => setModalImage(null)} // закрытие по клику
                    >
                    <img src={modalImage} alt='Большое изображение' style={{ maxHeight: '90%', maxWidth: '90%' }} />
                  </div>
                    )}
                        {products.map((products) => (
                          <div className='col-md-6' key={products.id}>
                            <div className='card h-100'>
                              <div className='card-body'>
                                <div className='d-flex align-items-start mb-3'>
                                  <img
                                  src={products.image}
                                  alt={products.title}
                                  className='rounded'
                                  width="200"
                                  height="200"
                                  style={{objectFit: 'cover', cursor: 'pointer'}}
                                  onClick={() => setModalImage(products.image)}
                                  />
                                  <div className='flex-grow-1'>
                                    <h5 className='card-title mb-1'>{products.title}</h5>
                                    <p className='card-text mb-0'>
                                      <b>Описание: {products.description}</b>
                                    </p>
                                    <p className='card-text mb-0'>
                                      <b>Цена: {products.price}</b>
                                    </p>
                                  </div>
                                </div>
                              </div>
                                <div className='card-footer bg-transparent'>
                                  <button className='btn btn-warning me-2' >Купить</button>
                                  
                                </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DescriptionPage