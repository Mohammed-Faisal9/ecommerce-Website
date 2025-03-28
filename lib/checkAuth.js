const { cookies } = require("next/headers");
const { createSessionClient } = require("./data-service");

export async function checkAuth() {
  const sessionCookie = cookies().get("session_cookie");

  // console.log(sessionCookie);
  if (!sessionCookie) {
    return {
      isAuthenticated: false,
    };
  }

  try {
    const { account } = await createSessionClient(sessionCookie.value);
    const user = await account.get();
    return {
      isAuthenticated: true,
      user: {
        id: user.$id,
        name: user.name,
        email: user.email,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      isAuthenticated: false,
    };
  }
}
