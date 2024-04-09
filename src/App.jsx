import {useEffect,useState} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import './App.css'

function App() {
  const [newsArticles, setNewsArticles] = useState([])
  const [activeArticle,setActiveArticle] = useState(0)

  useEffect(() => {
    alanBtn({
        key: '1d8da381f65d52adcd02f26f0bed52dc2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: ({command,articles}) => {
          if (command === 'newHeadlines') {
            setNewsArticles(articles); 
          } else if(command === 'highlight'){
            setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
          }
        }
    });
  }, []);

  return (
      <div className='cover'>
        <div>

          {/* <img src="" alt='logo'/> */}

        </div>
        <NewsCards articles={newsArticles} activeArticle = {activeArticle}/>
      </div>
  )
}

export default App;
