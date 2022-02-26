import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root{
  height: 100%;
}

body {
  padding-top: 4rem;
  color: ${props => props.theme.colors.colorText};
  font-family: ${props => props.theme.fonts.family.first};
}

ul, li {
  list-style: none;
}

button,input{
  font-family: ${props => props.theme.fonts.family.first};
  color: ${props => props.theme.colors.colorText};
}

img,svg {
  display: block;
  max-width: 100%;
}

table {
  border-collapse: collapse;
}

textarea {
  white-space: revert;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

a {
  color: inherit;
  text-decoration: inherit; /* no underline */
  color: ${props => props.theme.colors.colorText};
}

.container{
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
}

.animeLeft{
  opacity: 0;
  transform: translateX(-20px);
  animation: animeLeft .3s forwards;
}

@keyframes animeLeft {
  to{
    opacity: 1;
    transform: initial;
  }
}
`;
