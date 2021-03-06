const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>REST-Rant</h1>
              <a href='/places'>Check out these places!</a>
              <div>
                <img src="/images/sara-dubler-dinner.jpg" alt="Dinner Image"/>
                <div>Photo by <a href="https://unsplash.com/@ahungryblonde_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sara Dubler</a> on <a href="https://unsplash.com/s/photos/free-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>              
          </main>
      </Def>
    )
  }

module.exports = home