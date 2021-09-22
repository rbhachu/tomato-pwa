
import LazyLoad from 'react-lazyload'; // use lazyload for components and image
import ImgTomato from '../../assets/imgs/VevZ-tomato-web-med.jpg'; // import image
import tableData from './table.json'; // table JSON data
import Table2Column from '../../components/table-2-column'; // table component
import tabData from './tab.json'; // tab JSON data
import Tab from '../../components/tab'; // tab component
import Form from '../../components/form'; // form component
import './tomato.scss';

function TomatoPage() {
  
  return (

    <div className="App">

      <main>

        <h1>The Tomato</h1>

        <section>
          <div className="container">

            <div className="column-1 box">

              <LazyLoad height={233} resize={true}>
                <div className="main-image">
                  <img 
                    src={ImgTomato} 
                    alt="Tomato"
                    width="350"
                    height="233"
                  />
                </div>
              </LazyLoad>

              <h2>Varieties</h2>
              <p>There are around 7500 tomato varieties grown for various purposes. Heirloom tomatoes are becoming increasingly popular, particularly among home gardeners and organic producers, since they tend to produce more interesting and flavorful crops at the cost of disease resistance and productivity. In 1973, Israeli scientists developed the world's first long shelf-life commercial tomato varieties.</p>

              <p className="spacing-top">Tomato varieties are roughly divided into several categories, based mostly on shape and size.</p>
              <ul>
                <li>"Slicing"/"globe" tomatoes</li>
                <li>Beefsteak tomatoes</li>
                <li>Oxheart tomatoes</li>
                <li>Plum tomatoes</li>
                <li>Pear tomatoes</li>
                <li>Cherry tomatoes</li>
                <li>Grape tomatoes</li>
                <li>Campari tomatoes</li>
              </ul>

            </div>
            
            <div className="column-2 box">
              
                <LazyLoad once>
                  <Table2Column 
                    data={tableData} // table data to load
                    tableCaptionHeading={'Red tomatoes, raw'} // caption main heading 
                    tableCaptionSubHeading={'Nutritional value per 100 g (3.5 oz)'} // caption sub heading 
                  />
                </LazyLoad>

              <p className="table-footer">Percentages are relative to US recommendations for adults.
                <br />Source: <a href="http://www.nal.usda.gov/fnic/foodcomp/search/" target="_blank" rel="noreferrer">USDA Nutrient Database</a>
              </p>

            </div>

          </div>
        </section>

        <section>
          <LazyLoad once>
            <Tab 
              data={tabData} // tab data to load
              arialabel='Tomato Info Tabs' // tab description
            />
          </LazyLoad>
        </section>

        <section>
          <h3>Keep up to date on the tomato</h3>
          <p>Enter your name and email address below to receive weekly updates on the status of the tomato.</p>

          <LazyLoad once>
            <Form 
              submitButtonName={'Submit'}  // submit button text
            />
          </LazyLoad>
        </section>

      </main>

    </div>

  );

}

export default TomatoPage;
