import classes from './Links.module.css'

const Links = () => {
    
    return (
        <div className={classes.Container}>
            <a href="https://урокцифры.рф/">
                <img src="https://barnaul.org/upload/resize_cache/iblock/94e/1000_666_11ad056af159509fa29b13aa1d5079c1a/t_1093570937_body.jpg" height={75} width={125} />
            </a>
            <a href="https://netspo.edu22.info/security/#/login">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAADfCAMAAADcKv+WAAABO1BMVEX///8FUJEBN3MATpAARowASo4AQ4sAQYoAP4kATI/V2d4ASI0BOncBPHgBPHoAKmwCQoAESooFVZf39/cAM3Hy8PIAO4cAQnyVo7sWR37X1diXp73q6ujc29zt8vUAOIbo7/WfoaEALGKSq8jD0uHZ4+0AH2a+wMCcs82EocGyxdlCc6X2+vyKteDR3emht9BjiLIgX5qltcYyaJ8AMIO/z+B2l7tSfasFL1o+cKRehrGqv9UAKGxqh6lNeqn///mjp6oALVkXWZZqdHoNPF4AIlMMM0+LjpB9g40wVHsAOmpPXnNOUlcESoMAHUZBRkoAEjAMJT0aJTQXQ200W45ic5NMZYx8kqgAFGIcUofFxsgnQ2GIkqAAAC0AFUgAADkLLE6EjJcAC1VHf7U0gMUAXrKAsNuDhIUAJH7sk2AnAAAV4ElEQVR4nO1dC3ubRroemWEYghMnsk3SWIbpAgkgisBIqJISecM2m6bd5lyapm3a3e2e9vT0//+CM4Mk2yAhcZezT942QUIE5mW++W5zA+AjPuIjPuLfBg4x3NFsYGoxzMFspBvE2Xep6oHi2prXjyDGAkIQQomCHhASMEZR3zNtQ9l3GcuD6ObYlygxXuS4zgZwnMhD+nPgDdwPj6dhhwGPYAa3NFMews7E0j8cmsooDCQk5WF3AyJEnblp7LvwOUAGYw5RySxEbwUqtoHl7pvCVjizPkJ8KXZXlSlh37q1dalPBVSy+tIsJ7NbaFCIFiG+Bn5LloizyL4pJeF6PKyN3wIQTm9Rq9TnSKqXHwPHC3N939QWcOdYrJ9gDB7Pb0FNkqnQFEEGEU/3rF4dC1ezEbvB43Cf2nXWgQ0TpOAgN9sXQWOOataiWSRRfz/SqklNy+g1RElrn6ARoKLl5GjwtIgWGSReFDv5pQBN2q5IDRXSo6IEkcB3g3FoaaY5YNG/5c39LhRouJiPJ4/MNgnSKsz7/jlOQkK3bw30TXkMxbA1L4JIyuHbcsK4vYByBnO2QlFC/CS0d4kYGVkTKYeHy0dtOQKekIceJ0LohyOS86bE9ro73UCuHWElQQ5bSPnx/aIhvDPyOjuiMU7wmmF1EyNxt57hIOzPSJm7O3YfSVtJwknTDXIg7GoxHI8jjZR/ghGirXEZ323Welh4B0MOIq+qTnC0zjaFzcEmQ6xwh7kXUaTVIUfOINpCkhOa81l3MBSFiV3Xoxyzs0VchaYU63aGPBrXarUUK9sH5nAzLqu2jWHdBBmMcbZuE6y6n0Yxw9kERVw/QQaby7TBDXAcZb9RTug35Vg5YeZja+doZEup1K1NyWyA7mdVJKq3PSrdzDpEXrPuBq3IrHqsVa/2sxxkEQ7qfM5G2BmqlcM1io+VJaZ8p43wJtPzF2rzc+wsUYFBS0FqhtbhpJr8VSOzwU/reUAOzDI4dmt5x46fET4JYR23zwm3s7EUfFDHzb0MVdOQE5UF4m8sh1SDJNmbvRoOt5oQo3DmGxuMUPlNE36jgLTPkMLbqNjxqOJt+3Lgb3p3e2BIjdcm1c6JpNJNta5tbGgD+2FIi7Op1YiTKrck1HcZr/sW1eW/LAabMiuookdurAtHrls+/XQX/rzE6vvTXBw3GUihWnO01vQY2m0Pzz/9yxf3Dg8O/rSOgyvcv3//HgO9jl348q+vTvNw3JDV4TqkCsUofUdpvOuf9L58/fB+p5sX7KbffPPJV1998fWrXjmO/LwCwzU55Xc27uO/Heamt+JIKVKOn7/5j8e7i2Ru0DlChYBnlrJFvL+z5/3Vmx01yHHSei0uOP7n3453l2mDXuUEUpqiJqUY7vR7H/8XcxZYwWnpu/Gf1WF5DxxoYmd1fnn2QSyqtB5f5SjUhuBO7NdEkY/Izn/x6mXc+buhC5hbjD2dnx2PpOR57sGDB988fEg5vvjvPKWarvty5Tut7JsvTAp2MwSf3mM93hzr914HD99eUFG0YfL0A4aHjOOLn3IVK1g31nyOsm0EuVY3HJrnGQFzJvAPsnDv7Vnc1my44ceHMcdvcxVrQzJpt6bPwmTlhvM5fZozlMnwQVyFGRTvF6EI3A2iWjaVo8ti3GOPxzmTCJqQRfD+/VUh7HtrP1Ewjgc5KYLZmtfFdcsOs7IjhKAf5s6SPDq5n4V7q3SSnXHN3bt381IE3lo9wtK+qmO4pMDlFShShgef5C6Wn26OVYxjITw6yqR4uJ3iXYbcFIG7FnXwLeXLHh3dy8INihlXFKjFTRECbmeM7qOju6UpHhaiCNZyg9Wi49ygFDNweHBNMeuaQhSNteBRaLIL6QqPjg6zcHJFMfOaQhTXRVX0G2C0hmyKB9cUTw5pPR4eHj1LXXxQjKKzFs2iNobnPjo6yMQ1Rfrl6MnBdxfPj+4mLylEcS3Wo9XYwjDrR89yUDw6eXby3cX5MThLX12M4rV/2WY15qrFZ99d3Ik/nT07rETRTYfHbbTGXBSfPKLydEk/naWvLkhxPQda2hvPjy2CenKDIsm4uihFI12NXC2dVVuxVouHV8ebFJcJksq1CKbpaqyv7zgLGwT17uqvJiiu5QjF0rFxXmxqi7QC42MTFME8rVRx05MB0hSpnJ4cHS1qcrAcA18rRT1tG6UmRo/dxFotHj158u7szvfs9MO3z+O5wrVSBEHKxSkf/udEiuLJV+++ZyZwweXk6IfnoG6Kay5O03YjRfHoexKfXnE5qp+ikk7ZNq1wUhSfLScFUy6HDVEEYdpulM6p5kP7tQjctN1AzQ5bS9diCxTXFE6lzrjd2AdFbS00bnTk2j4ornk4aHvXeEWjsg+Ka5K6w/pXdH/2QjGdxNnR3VjRUc82Gg1SXNOpnW2y6NRL8ej5yKUwrBXFseG62rOzZRFqogjSDCHZcrFbWVCTCSfqoj754YcnRze/Pzu4d5/+x/4/qIdiOmrcqm+qrsOSjuMP0yQWJ08WWPulJMVZqjHCbZ2hVQd/PXpyUgFHD8s9NT3Lgt8yl1OpOoLv7ORhftxPn7j7Y8nHpnrGt2Vw3KrDO5U71VDysfNkY+RQ9qUmKfmMFY571VDysakBQh2czaPyuiSM4mn7FEepxrhFpVYetr+rFk93fCn5WJKaZg0zdQqpnNpZUjw+Xh1OjxdgX1Yfrz/1jk8X151Wo5jopOJ8kc+sq1HltEdM7fT4/XnMiR7O3z+N0es9XeHGp/Onj9lreP/0fPlOyj63fyPXyM397JBRq5yDXNTO5U8/X9LDz3//Gfz5r//4nOKfX9755eWLl/948+LlF72fflngi97p129enYNXf/95VbNln+slVOqcz+y+qT6DZknxNaV4+f6Xowtw8fr1xcXZxbdf987Ozp7/6dHZ2UXvYoXjS/3lm1fHb16Ty4oUEypVnHSFLL1ZfVjHkuK7s8vL858++ZFRZMEFePfu8vISXBwdX7LjCvQ9PH/y4i/f6iuGpSkmBiRy3SAzJ159DYuY4CWlCP71P6HyjlJ8++PXFAfPGbeLkx5l1fvpBZPdz1983qPn3PHJBbikp48vK1BMJsW5ftYUFaV6rnyhF4/n3395b3ra659dXkwCj8Fl5y+kc3YYrEA/v3/94+Tb91XtYspqiFMpw2q41eeYnJ4z9Ma+rx33zvtnvYvAi6Wwd07/u+jSv8/PrwjRb2+7oeG/fd87X6Dsc5WEXeSCaYZasaunyuOi9nq//uayT79qPfO3X1fFP++Z/3uHHu68/maJ8/N3v+q9nvtb5/teNYqp0RvSICMlblafOLskY8YMzz+ze/png/MrjH6PD5+tcP7+d3ZhT//dWlyQa0LKRiTHUqFRRqxRw+qrx4/PH7OKWpT4Dj0ad64p3jHig7HC6sTqosc5ZjFkYJKiON5sNbwaeh/PY4r58TjxsbRGTXWlwsGAbLxsvPl0IbBqpChEc1mDvaelmyIte4KipJHNjW5Cyj/iCr33C5IFQZXrqzyzNLIwTVK0wOakf55ZCrtx2qPl7Z0WQu+UOuT/V+WpSSdVynJF/bpGAhyvQqgCABWkFLRPcQ/IS/EWLJxbFslscWbHjX9LFkAug5S6ycoHB60MPG4GyTRjZu6mv6ep3nWgn/RussalTpseeNQgkt2oKKvJhW0uDVIvUpGGkGUbtGaHOjQJp5MAzhrQMItaLVadIMk1ZPms60awzVLVimT3W3bPlDskLZaqViQ7NbJniJHhB+vBJfuJsxcad4ZVuxf3BivR+7ZlvGa7q3PXiaT/BrOl0f9gDWPS8nMZ6X56ut/48PiGkEyjZk9kdIDXyuy4BpBcrS4zWgQK0OAt3P4oDxK9Nlu0jQJmH6rVCG8qVC5b2zhAVz9Qq5FIFHNbmptD5L0tnVUJTtJB3dJNqgCuvbUk64SbaIrbVm0loB99kPrGTCjULYYfGEBTy+gbopdJ3RGGet5oItvPbasmx3DV4o2RBKqq5l3hT5/0J4tLyVBW1T9qUW9OwnvbNoyRhiSgW3iFAwWhKJwKar68jx5MgkVTIbDjefWsOJ4cOL19yrQNvMLT/0LE0iH2mABizT0dGPHOvCPgevPQWHxjtzTHY0pN11zgaLFlJrALrs47lqnN410c7OnYooLmsn+Xd9ZMYvj7FqvI4BqjwpLaXb0UwuMIybb9hwyFYajLQoShoatihJACJlgQZA9oQxPM5XBJkVKh5xE9T4ZQFrE8ApaMIaaNyZSRgPLOC0744DtmEzsD0C2avxHlZSooxBbQke+QGfYUJaBelIk9V7bAHBs2DogRqe5AHliIv6Zoy/F5XcFw5pgoUFTeVeZYAwPZNOScjYYk5HT7JA0DWCCUC2b9I7xsT4HIIV7CCtBpNTkSJyIR+a6AhjCilUOFU5MHAzSB/A2KlkwbjimbiszebLdjY6orXHlOz80cNSfFpMnYPl/aBTPDlQsGVBZiC+CZkTuH4WxmDZwFxQ7UZqZm69jTPWybmNIay/YAipKNrylq7PMUzxQsKTRciFzZZ2sSesCTdUfNuYBd0nvrbL2WOMQCgVxQ4URImESCOhupXS3ETKeoIdslJjDnvKvjvjaRKQU0niAemAi7hrqgiDoOlTE0p+cdBXNdi6OS7qOAamcj5MXxmO/m0gvJ5Ft2ILWAAsZURAqG/o7HqdinBs7sDFW2OZseS2IIh3jq6J2oG00d4PqqGhjAlAbAhQuKHbbmx/I8wZE/ZHssKXNZjWwQ8BFFvgWlkxPfdkwJo5Jq6QqSSDGOwFGU5HH5jR0divjr4jfn6mdw8zyhAqrc+B4M6d+umoticsSNuMNf0ok7paax/d4bMkwqcsujJSVeHpcpOcAvezjxEo4JfMXFnda3JHe00rm/ZA94ZpfU9fUg1EB/fwsuFwdJMOR2W/XByBCBvodqLI2kssmxNIPRZ73hkxILVRNy9bHVkDMxlWiHf7qAb8x8MEJFp8ZrEYT+0mt2grY22gDp1Fuu1W5DDwgu6KNiQ6g9jIIAxV6Lo3G4xWxscmnGXEtP6bKi9YEuZPYkb4KNRZf1TmIaSnVQRJWjYbumFcdMrqW5Ix0omsUeTxYHfTQaMc9WX/xoU3Ot245j6+wndkMr53SKUcIDz7eCiEMbrOqCMSyywPF8EfNbQggiMQo1AjRVUFWZ3sNUZRXjwKEH6jWNZHoIHBDgoUqjNi3+cQKG2AHjPwgZBkAfUh8zkFU1X7pzkh7clwdT5JhzYAhFdnEIFsHGCE8J4nhfxsSEnO5GeObI0Db60gRYJkFdwEPNmAgWmEDiCmOF/TiR5kAWqeeoEiL3FYGqfVP2HF3c7k4vkNx3h9s6hfjGv1It0HVpLF8gbuwvNkSiEYIhdAkLHAds1xRbpoGxx9bAClhpJItgWq8sDOzzHRGaI+YNu3gOcIeXOEwIDgJIKU55Pwi4POmHZH+UlFOBKPTe+hw4YoH9uEwcUR1qdLAds6FFHzDVY2KLhX60dulJPexEBlNENPYAfcmy+MkIj1k7ZhTn44hR5ASNj4An9cPQC8nO56aWusmdk7Fgxw5cMBAKeOMB4kKPZ0kcH4V2JNsmhJYp0ehaROGgK05Id6pHKgnQ2OzKAyqoM1vsEB6FJlv0QxapUqaCiuEU4IgKUjCa5Rislhprw+cOdAkUoUQFyof5M+POGKsyC9hpVVI149FAvEs1icWSY6oq0loM1CFL0fix1qGNN/5Vj3+k6kag6mZI1Q2t5GGH5QKGao7NMlPLh+D82Ty21aIwooUrslEFcVdLGrtsaQBTHizXOHZc12Gej7tYMWBxGUsSK9c/st/jP87SS6J3263+SWr1/SLjoqg5FSO2qHP57L+mNj9qYJxcJx8VseSuwLFF8ZVuju1BMmCPG+/FGyXXKsyrTpcIqZBLDpgJwu0dZuykpvIX9KqdQOywBMsY3t6+/zCpawovjG5ArkNrkBQxju1CT67/UmJ52wGO+7BmuJA73h7SyxSX2TTMk+L9G6a5+xXaxTRpMArqmiV8ke235FTeqaoRDJKeG8eVisHZYB3aEnWh0X3HyyG9nUbZJdFtRM3pAGi4jYWqCyHdEMuJKUOI4m1jPbn6PPF6kV75pcIQjL4Uc+wPb9cMldQmTByq4J8oVCA4PKBx1W2yHIPUItNVtgpbNGsapdIY6PaonFFq0zdYcQgty41w1Gw4t2Y2lZta2IafVFWGsdyz/XmD2zGk2hCTC0xzNXRNxJusIurn+LfBBSCpRXuLBYlZGDMzKwUO6O5/BCBJ78Bc01LvMUe+a4BO3wEZ86zbgcGlGdakIZw+48hJusP5BMya374+C0aqDrkcGayccCZ8fMMB4SMDBPviqIupdohrLIkTLDhariTqTguJp02wU9aCq2by01D82CtE05mERqPhPnSrll7ltT4pXWDJkQ9CEc+0fGNFaoWXYsjVv6XUQlZpe486guXJLXYDM5AgFSBS5Vf/U5RAWroTHTj1BLFNp1VPm0Ox00jyU5lcpUv4sdmRrdYCZSu927JEjVcjWNjHxTMCd6q2FH0YkzRD2G/u7Y6vOFJnx+bVKWnsUVcwYUpIuYIjLQrCu4q3OUF3pqqco5uzEoxJ2lZwuOHktYXFlY+BTTCKMG50TqeF01tliHzjzWMWjRcmktYjG1cLcXNr5NgRTO/MB+tZV2kXnPmyScK5AkgoNCQ5bh+lt1fiBK8tNR4ut6/kRcrODeKRxDWDeGsEqaJp0Ts2V1t0oogN0BdwzUZSCSGfltEOH7Xa2alL4urN+jYgc7Vbo8tILLjWCKnbPW/VaXQIuTLIIopsYIvqpCZVZ4RQWifYuK1YgzMiGlwpdJHWJAmxMK9BkNzpJoLU1dhDIteeGSEPr2rSn9k+RONqBXHsCVpvg6zJj/eSMjJCV9F8xK/aZKCNORFN7NKKx7CidS0aV2HWirXNg000GHk8Wvg7HPT9uGVqpMS9yGAibJJQVoX9PfaouF2LKvjZGN4sHScJ/UExuSJmH6W97dXdoNTGVsNbYMkaE0zXioQbjUiEuG/mfPWObvk4gx+VUaHyvgmVQaZosTSu7kmJxckhiryZsb18ZGT1eSRl8euIeHorev1IKAXxirLE4pKD0iQEo7llu+uzvh3i2hb157PEM/7nfC1WqB44s4k80Vzmd6UCdI7jJYT4bjD2Qksz2fRgK/TmQZeHlB23Wb0sIMF6ZlLXBkOL1K5nEze9NdmCKMfzvCRBCkniecptGzkmoZAPb4WIJmFY3aEahNH2wucAx2O/oEpuD4YWyJvdk/z8JKEb3i4JTYPMphHaEAnlosfUcDjau5XYDcc1591d2mSdH4/4iZVjuPRtgeIOxr7EeOapPB5CMQhtsu9SF4Zj2FY/otaBz6hQjhMl+rPkT02d7Lu0FUBGg7AfIYwFhGKjERsPhASMJb/vmbZxW5VnQTjE0O3ZIDb+mmkO7JH770LtIz7iIz7iGv8P8mz3WXcan50AAAAASUVORK5CYII=" height={75} width={75} />
            </a>
        </div>
    )
}


export default Links;