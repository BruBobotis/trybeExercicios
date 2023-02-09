import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.
fetch(USERS_API)
    .then(response => response.json()
    ).then(final => {
        const { users } = final;
        fillUsersSelect(users);
    });

usersSelect.addEventListener('change', () => {
  clearPageData();

  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
  const selectAPI = `https://dummyjson.com/posts/user/${usersSelect.value}`;
  fetch(selectAPI)
    .then((resolved) => resolved.json()
    )
    .then((final) => {
      const { posts } = final;
      fillPosts(posts);
      const [featuredPost] = posts;
      const pickAPI = `https://dummyjson.com/posts/${featuredPost.id}/comments`;
      return fetch(pickAPI);
    })
    .then((resolved) => resolved.json()
    )
    .then((final) => {
      const { pick } = final;
      fillFeaturedPostComments(pick);
    })
    .catch((error) => {
      fillErrorMessage('Erro ao recuperar informações');
      console.log(error.message);
    });
});
