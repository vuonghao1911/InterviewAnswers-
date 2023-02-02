package demo;

import java.util.Stack;



public class StackDemo {
	 public static void main(String args[])
	    {
	        // Creating an empty Stack
	        Stack<Integer> stack = new Stack<Integer>();
	  
	        // Use push method to add elements
	        stack.push(10);
	        stack.push(15);
	        stack.push(50);
	        stack.push(20);
	        stack.push(30);
	 
	        System.out.println("Initial Stack: " + stack);
	        System.out.println("Stack size "
                    + stack.size());
	  
	        // Removing elements using pop() method
	        System.out.println("Popped element: "
	                           + stack.pop());
	        System.out.println("Popped element: "
	                           + stack.pop());
	  
	        // Displaying the Stack after pop operation
	        System.out.println("Stack after pop 30 20 50: "
	                           + stack);
	        System.out.println("Is the stack empty? " + 
                    stack.empty());
	        
	        System.out.println("Stack size after pop operation "
                    + stack.size());
	        
	        // index elements of stacks
	        System.out.println("index 10 of stacks "
                    + stack.search(10));
	        
	        stack.pop();
	        stack.pop();
	        stack.pop();
	        System.out.println("Stack after pop 50 15 10 "
                    + stack);
	        System.out.println("Is the stack empty? " + 
                    stack.empty());
	        
	        
	    }
	 	
	}


