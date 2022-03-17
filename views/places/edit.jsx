const React = require('react')
const Def = require('../default')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${id}?_method=PUT`}>
            <div className="row">
                <div className="form-group col-sm-6">
                    <label htmlFor="name">Place Name</label>
                    <input type="text" name="name" id="name"
                    required defaultValue={place.name}  />
                </div>
            
                <div className="form-group col-sm-6">
                <label htmlFor="pic">Place Picture</label>
                <input id="pic" type="text" name="pic" 
                required defaultValue={place.city} />
                </div>
            </div>
            <div className="form-group col-sm-6">
                <label htmlFor="city">Place City</label>
                <input id="city" type="text" name="city" 
                required defaultValue={place.city} />
            </div>
            <div className="row">
                <div className="form-group col-sm-6">
                    <label htmlFor="state">Place State</label>
                    <input type="text" name="state" id="state"
                    required defaultValue={place.state}  />
                </div>             
            </div>
            <div className="form-group col-sm-6">
                    <label htmlFor="founded">Founding Year</label>
                    <input className="form-control" id="founded" name="founded" value={place.founded} />
            </div>
            <div className="form-group">
                <label htmlFor="cuisines">Cuisines</label>
                <input className="form-control" id="cuisines" name="cuisines" required />
            </div>
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form