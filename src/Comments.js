import React from 'react';

export const Comments = () => {
  var extract = require('extract-comments');

  // pass a string of JavaScript

  let htmlString = `This works better but again accepts too much in some cases. It will accept any even number of 
/*. It might even accept the * that is supposed to end the comment.
start_code();
/****
 * Common multi-line comment style.
 ****/
more_code(); 
/*
 * Another common multi-line comment style.
 */
end_code();
<!-- hello -->
// Hello there
https://www.google.com`;

  let comments = extract(htmlString);
  console.log(comments);

  // let cmnt = extract(htmlString, {
  //   extractor: require('babel-extract-comments'),
  // });

  let pageData = `
</h1>
H2
<h2>Aenean commodo ligula eget dolor aenean massa</h2>
SHORT UL
<ul>
  <li>Lorem ipsum dolor sit amet consectetuer.</li>
  <li>Aenean commodo ligula eget dolor.</li>
  <li>Aenean massa cum sociis natoque penatibus.</li>
</ul>
LONG UL
<ul>
  <li>Lorem ipsum dolor sit amet, consectetuer adipiscing 
  elit. Aenean commodo ligula eget dolor. Aenean 
  massa.</li>
  <li>Cum sociis natoque penatibus et magnis dis 
  parturient montes, nascetur ridiculus mus. Donec quam 
  felis, ultricies nec, pellentesque eu, pretium quis, 
  sem.</li>
  <li>Nulla consequat massa quis enim. Donec pede justo, 
  fringilla vel, aliquet nec, vulputate eget, arcu.</li>
  <li>In enim justo, rhoncus ut, imperdiet a, venenatis 
  vitae, justo. Nullam dictum felis eu pede mollis 
  pretium. Integer tincidunt.</li>
</ul>
PARAGRAPH
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit. Aenean commodo ligula eget dolor. Aenean massa 
<strong>strong</strong>. Cum sociis natoque penatibus 
et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque 
eu, pretium quis, sem. Nulla consequat massa quis 
enim. Donec pede justo, fringilla vel, aliquet nec, 
vulputate eget, arcu. In enim justo, rhoncus ut, 
imperdiet a, venenatis vitae, justo. Nullam dictum 
felis eu pede <a class="external ext" href="#">link</a> 
mollis pretium. Integer tincidunt. Cras dapibus. 
Vivamus elementum semper nisi. Aenean vulputate 
eleifend tellus. Aenean leo ligula, porttitor eu, 
consequat vitae, eleifend ac, enim. Aliquam lorem ante, 
dapibus in, viverra quis, feugiat a, tellus. Phasellus 
viverra nulla ut metus varius laoreet. Quisque rutrum. 
Aenean imperdiet. Etiam ultricies nisi vel augue. 
Curabitur ullamcorper ultricies nisi.</p>
SHORT PARAGRAPH
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit. Aenean commodo ligula eget dolor. Aenean massa. 
Cum sociis natoque penatibus et magnis dis parturient 
montes, nascetur ridiculus mus. Donec quam felis, 
ultricies nec, pellentesque eu, pretium quis, sem.</p>
H3
<h3>Cum sociis natoque penatibus et magnis dis 
parturient montes nascetur ridiculus mus</h3>
H4
<h4>Donec quam felis ultricies nec pellentesque eu 
pretium quis sem nlla consequat massa quis enim</h4>
H5
<h5>Donec pede justo fringilla vel aliquet nec vulputate 
eget arcu</h5>
H6
<h6>In enim justo rhoncus ut imperdiet a venenatis vitae 
justo</h6>
BLOCKQUOTE
<blockquote>
Lorem ipsum dolor sit amet, consectetuer 
adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa <strong>strong</strong>. Cum sociis 
natoque penatibus et magnis dis parturient montes, 
nascetur ridiculus mus. Donec quam felis, ultricies 
nec, pellentesque eu, pretium quis, sem. Nulla consequat 
massa quis enim. Donec pede justo, fringilla vel, 
aliquet nec, vulputate eget, arcu. In <em>em</em> 
enim justo, rhoncus ut, imperdiet a, venenatis vitae, 
justo. Nullam <a class="external ext" href="#">link</a>
dictum felis eu pede mollis pretium.
/* hello how are you */
<!--These should be in the -->
Hey there.
<!--i am comment -->
//nhjsad
// Hey there
<script>
//hey llllll
</script>
// df
</blockquote>`;

  let commentForHtml = /<!\-\-[\w\s\S]+?\-\->/g;
  let htmlComment = pageData.match(commentForHtml);
  console.log(htmlComment);

  let multilineComment = /\*([^*]|[\r\n]|(\*([^/]|[\r\n])))*\*/gm;
  console.log(pageData.match(multilineComment));

  let jsCommentRegex = /(?:^\/\/.*\n?)+/gm;
  let jsComments = pageData.match(jsCommentRegex);
  console.log(jsComments);
  return <>Finding comments</>;
};
