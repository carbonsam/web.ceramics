import {component$} from "@builder.io/qwik";
import {Link} from "@builder.io/qwik-city";

export const Navbar = component$(() => {
    return (<nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <Link class="navbar-item" href="/">
                <span class="is-size-3">Cocktails</span>
            </Link>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
               data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            {/*<div class="navbar-start">*/}
            {/*    <a class="navbar-item">*/}
            {/*        Home*/}
            {/*    </a>*/}

            {/*    <a class="navbar-item">*/}
            {/*        Documentation*/}
            {/*    </a>*/}
            {/*</div>*/}

            {/*<div class="navbar-end">*/}
            {/*    <div class="navbar-item">*/}
            {/*        <div class="buttons">*/}
            {/*            <a class="button is-primary">*/}
            {/*                <strong>Sign up</strong>*/}
            {/*            </a>*/}
            {/*            <a class="button is-light">*/}
            {/*                Log in*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    </nav>)
})
