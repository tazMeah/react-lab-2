
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import PostInList from './components/PostInList';
import Post from "./components/Post"
import PostForm from "./components/PostForm"
import { stringify } from 'querystring';
import SocialPosts from "./components/SocialPosts"
import { debug } from 'console';

// first test case
test('renders title and thought', () => {
  const post: Post = {title: "Test Title", thought: "Test Thought"};
  const spy = jest.fn();
  render(<PostInList title={post.title} thought={post.thought} onDelete={spy}/>);
  const title = screen.getByText("Test Title");
  const thought = screen.getByText("Test Thought")
  expect(title).toBeInTheDocument;
  expect(thought).toBeInTheDocument;
});

// second test case
test('renders title and thought', () => {
  const post: Post = {title: "ALL CAPS TITLE", thought: "ALL CAPS THOUGHT"};
  const spy = jest.fn();
  render(<PostInList title={post.title} thought={post.thought} onDelete={spy}/>);
  const title = screen.getByText("ALL CAPS TITLE");
  const thought = screen.getByText("ALL CAPS THOUGHT")
  expect(title).toBeInTheDocument;
  expect(thought).toBeInTheDocument;
});

test('spy function is called when delete button is pressed', () => {
  const post: Post = {title: "Test Title", thought: "Test Thought"};
  const spy = jest.fn();
  render(<PostInList title={post.title} thought={post.thought} onDelete={spy}/>);
  const btn = screen.getByRole("button", {name: "onDelete"})
  fireEvent.click(btn)
  expect(spy).toHaveBeenCalled();
});


test("onSubmit is called with correct Post object after submitting form", async () => {
  // create spy fn for submit and spy fn for useStates
  const spy = jest.fn();
  // const setState = jest.fn();
  // const useStateSpy = jest.spyOn(React, "useState");
  // mock implementation of setting title and thought
  // spy.mockImplementation((init) => [init, spy]);
  
  render(<PostForm onSubmit={spy} setTitle={spy} setThought={spy}/>);
  // switching class "show" to true
  const show = screen.getByRole("button", {name: "showForm"});
  fireEvent.click(show);
  const form = screen.getByRole("form", {name: "form"});
  // const modal = screen.getByRole("modal", {name: "modalForm"})
  // expect(modal).toHaveClass("modal-dialog");
  expect(form).toBeInTheDocument();
  // filling out the form
  const titleEl = screen.getByRole("textbox1", {name: "titleInput"});
  fireEvent.change(titleEl, {target: {value: "test title"}});

  const thoughtEl = screen.getByRole("textbox2", {name: "thoughtInput"});
  fireEvent.change(thoughtEl, {target: {value: "test thought"}});
  // setting up submit button
  
  fireEvent.click( await screen.getByRole("button", {name: "onSubmit"}))
  
  // fireEvent.submit(form);
  expect(spy).toBeCalledWith({title: "test title", thought: "test thought"});
});


test('calls onClose callback when close button is clicked', () => {
  const post: Post = {title: "Test Title", thought: "Test Thought"};
  const spy = jest.fn();
  render(<PostInList title={post.title} thought={post.thought} onDelete={spy}/>);
  const btn = screen.getByRole("button", {name: "onDelete"})
  fireEvent.click(btn)
  expect(spy).toHaveBeenCalled();
});


