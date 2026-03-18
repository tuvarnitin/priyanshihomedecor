import React from 'react'
import { Link } from 'react-router-dom'

const FooterLinksList = ({title,links}) => {
  return (
          <div>
              <h2 className="font-semibold mb-2 text-responsive-medium">{title}</h2>
              <ul className="space-y-1 text-sm">
                {
                      links.map(({href,name}) => {
                          return <li className="hover:underline w-fit cursor-pointer text-responsive-small">
                            <Link to={href}>
                                  {name}
                            </Link>
                          </li>
                      })
                }
              </ul>
          </div>
  )
}

export default FooterLinksList