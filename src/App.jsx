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
          // } 
          // else if (command === 'open') {
          //     const parsedNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy: true}) : number;
          //     const article = articles[parsedNumber - 1];

          //     if(parsedNumber > 20) {
          //       alanBtn().playText('please try that again.')
          //     } else if(article) {
          //       window.open(article.url, '_blank');
          //       alanBtn().playText('opening in new tab');
          //     }
            
          }
        }
    });
  }, []);

  return (
      <div className='cover'>
        <div>
        </div>
        <NewsCards articles={newsArticles} activeArticle = {activeArticle}/>
      </div>
  )
}

export default App;
