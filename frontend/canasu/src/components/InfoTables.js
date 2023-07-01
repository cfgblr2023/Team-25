import React from 'react'

export default function InfoTables() {
  return (
    <div className='d-flex justify-content-center p-3'>
       <div className="row w-75 ">
          <div className="col-6  ">
          <table class="table table-striped table-sm border border-dark ">
              <thead>
                <tr>
                  <th>test1</th>
                  <th>test1</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>
                        test1
                    </td>
                    <td>
                        test2
                    </td>
                </tr>
                <tr>test2</tr>
              </tbody>
            </table>
          </div>
          <div className="col-6 ">
          <table class="table table-striped table-sm border border-dark ">
              <thead>
                <tr>
                  <th>test1</th>
                </tr>
              </thead>
              <tbody>
                <tr>test2</tr>
                <tr>test2</tr>
              </tbody>
            </table>
          </div>
          
        </div>
      
    </div>
  )
}
