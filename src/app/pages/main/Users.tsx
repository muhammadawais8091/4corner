import { useContext, useEffect } from "react"
import { PageHeading } from "../../components/common/PageHeading"
import { AppContext, AuthContext } from "../../context"
import { UserListing } from "../../components/users/UserListing"
import { ActionType } from "../../context/AppContextReducer"

export const Users = (): JSX.Element => {
  const { currentUser } = useContext(AuthContext)
  const { dispatch } = useContext(AppContext)
  const { fullName } = currentUser || {}

  useEffect(() => {
    return (() => dispatch({ type: ActionType.SET_CURRENT_PAGE, currentPage: 1 }))
  }, [])

  return (
    <>
      <PageHeading
        title={`Hi ${fullName}, Welcome 👋`}
        subTitle="Here is the list of all members."
      />

      <UserListing />
    </>
  )
}