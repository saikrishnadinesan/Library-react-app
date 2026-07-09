import React from 'react'
import Navigation from './Navigation'

const ViewBook = () => {
  return (
    <div>
        <Navigation />

    <div className="container mt-4">
        <div className="row g-4">

            
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                    <img
                        src="https://covers.openlibrary.org/b/isbn/9780544003415-L.jpg"
                        className="card-img-top"
                        alt="Book"
                    />
                    <div className="card-body">
                        <h5 className="card-title">The Hobbit</h5>
                        <p className="card-text">
                            Book Code: BK001 <br />
                            Author: J.R.R. Tolkien <br />
                            Publisher: HarperCollins <br />
                            Category: Fantasy <br />
                            Edition: 2nd Edition <br />
                            Copies: 15 <br />
                            Shelf: A-12
                        </p>
                    </div>
                </div>
            </div>

           
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                    <img
                        src="https://covers.openlibrary.org/b/isbn/9780747532743-L.jpg"
                        className="card-img-top"
                        alt="Book"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Harry Potter</h5>
                        <p className="card-text">
                            Book Code: BK002 <br />
                            Author: J.K. Rowling <br />
                            Publisher: Bloomsbury <br />
                            Category: Fantasy <br />
                            Edition: 1st Edition <br />
                            Copies: 20 <br />
                            Shelf: B-05
                        </p>
                    </div>
                </div>
            </div>

            
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                    <img
                        src="https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg"
                        className="card-img-top"
                        alt="Book"
                    />
                    <div className="card-body">
                        <h5 className="card-title">To Kill a Mockingbird</h5>
                        <p className="card-text">
                            Book Code: BK003 <br />
                            Author: Harper Lee <br />
                            Publisher: Harper Perennial <br />
                            Category: Fiction <br />
                            Edition: 3rd Edition <br />
                            Copies: 12 <br />
                            Shelf: C-08
                        </p>
                    </div>
                </div>
            </div>

           
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100">
                    <img
                        src="https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg"
                        className="card-img-top"
                        alt="Book"
                    />
                    <div className="card-body">
                        <h5 className="card-title">1984</h5>
                        <p className="card-text">
                            Book Code: BK004 <br />
                            Author: George Orwell <br />
                            Publisher: Signet Classics <br />
                            Category: Dystopian <br />
                            Edition: 1st Edition <br />
                            Copies: 10 <br />
                            Shelf: D-03
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default ViewBook