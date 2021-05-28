import {
    ExceptionFilter,
    Catch
  } from '@nestjs/common';
  
  @Catch()
  export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: unknown, ...args ) {
	console.log("The JSON exception should have been caught here")
        console.group(exception)
        console.log(args)
    }
      
  }
