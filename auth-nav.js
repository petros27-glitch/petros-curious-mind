async function updateNavigation() {
    const {
        data: { user }
    } = await supabaseClient.auth.getUser();

    const accountLink = document.getElementById("account-link");

    if (!accountLink) return;

    if (!user) {
        accountLink.textContent = "Sign In";
        accountLink.href = "signin.html";
        return;
    }

    const { data: profile } = await supabaseClient
        .from("profiles")
        .select("is_admin")
        .eq("id", user.id)
        .maybeSingle();

    if (profile && profile.is_admin === true) {
        accountLink.textContent = "Admin Dashboard";
        accountLink.href = "admin.html";
    } else {
        accountLink.textContent = "My Account";
        accountLink.href = "account.html";
    }
}

updateNavigation();