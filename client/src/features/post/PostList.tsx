import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import { PostItem } from './PostItem';



function PostList(): JSX.Element {
  const [select, setSelect] = useState('');
  const [money, setMoney] = useState<string>('');
  let posts;
  let newPosts;

 

  if (select === '' && !money) {
    posts = useSelector((store: RootState) => store.posts.posts)
    newPosts =  [...posts].sort((a,b)=>(a.price-b.price))
  
    
  } else if (select === '' && money) {
    newPosts = useSelector((store: RootState) =>
      store.posts.posts.filter((el) => el.price > Number(money)),
    );
  } else if (select) {
    newPosts = useSelector((store: RootState) =>
      store.posts.posts.filter((el) => el.category === select && el.price > Number(money)),
    );
  }

  return (
    <div className="flexItems">
      <div className="flexFilter">
        <div className="divTrade">
          <form className="moneyTrade">
            <input
            
              placeholder="money"
              type="text"
              className="option optionMoney"
              value={money}
              onChange={(e) => setMoney(e.target.value)}
            />
          </form>
        </div>
        <div>
          <form className="selectTrade">
            <select
              className="option"
              name="select"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              <option value="">Все Категории</option>
              <option value={'les'}>Дерево</option>
              <option className="tratra" value={'kamen'}>
                Камень
              </option>
              <option className="ygol" value={'ygol'}>
                Уголь
              </option>
            </select>
          </form>
        </div>
      </div>

      <div className="flexProduct">
        <div className="postFlex">
          {newPosts?.map((post) => <PostItem post={post} key={post.id} />)}
        </div>
      </div>
    </div>
  );
}

export default PostList;
