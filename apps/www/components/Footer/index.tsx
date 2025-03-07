import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Badge } from 'ui'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ThemeToggle from '@ui/components/ThemeProvider/ThemeToggle'
import { CheckIcon } from '@heroicons/react/outline'
import SectionContainer from '../Layouts/SectionContainer'

import footerData from 'data/Footer'
import * as supabaseLogoWordmarkDark from 'common/assets/images/supabase-logo-wordmark--dark.png'
import * as supabaseLogoWordmarkLight from 'common/assets/images/supabase-logo-wordmark--light.png'

interface Props {
  className?: string
}

const Footer = (props: Props) => {
  const { resolvedTheme } = useTheme()
  const { pathname } = useRouter()

  const isLaunchWeekPage = pathname.includes('launch-week') || pathname === '/'

  return (
    <footer
      className={['border-border border-t', props.className].join(' ')}
      aria-labelledby="footerHeading"
    >
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="w-full !py-0 border-b">
        <SectionContainer className="grid grid-cols-2 md:flex items-center justify-between md:justify-center gap-8 md:gap-10 !py-6 md:!py-10 text-sm">
          <div className="flex flex-col md:flex-row gap-2 md:items-center">
            We protect your data.
            <Link href="/security">
              <a className="text-brand hover:underline">More on Security</a>
            </Link>
          </div>
          <span className="hidden md:block h-px w-8 bg-border" />
          <ul className="flex flex-col md:flex-row gap-2 md:gap-8 justify-center md:items-center">
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4" /> SOC2 Type 2{' '}
              <span className="text-lighter">Certified</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4" /> HIPAA{' '}
              <span className="text-lighter">Compliant</span>
            </li>
          </ul>
        </SectionContainer>
      </div>
      <SectionContainer>
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="#" as="/">
              <a className="w-40">
                <Image
                  src={
                    isLaunchWeekPage
                      ? supabaseLogoWordmarkDark
                      : resolvedTheme === 'dark'
                      ? supabaseLogoWordmarkDark
                      : supabaseLogoWordmarkLight
                  }
                  width={160}
                  height={30}
                  alt="Supabase"
                />
              </a>
            </Link>
            <div className="flex space-x-5">
              <a
                href="https://twitter.com/supabase"
                className="text-lighter hover:text-foreground transition"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://github.com/supabase"
                className="text-lighter hover:text-foreground transition"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="https://discord.supabase.com/"
                className="text-lighter hover:text-foreground transition"
              >
                <span className="sr-only">Discord</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 71 55" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="https://youtube.com/c/supabase"
                className="text-lighter hover:text-foreground transition"
              >
                <span className="sr-only">Youtube</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                  aria-hidden="true"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {footerData.map((segment) => {
                return (
                  <div key={`footer_${segment.title}`}>
                    <h6 className="text-foreground overwrite text-base">{segment.title}</h6>
                    <ul className="mt-4 space-y-2">
                      {segment.links.map(({ component: Component, ...link }, idx) => {
                        const children = (
                          <div
                            className={`text-sm transition-colors ${
                              link.url || Component
                                ? 'text-lighter hover:text-foreground'
                                : 'text-muted hover:text-lighter'
                            } `}
                          >
                            {link.text}
                            {!link.url && !Component && (
                              <div className="ml-2 inline text-xs xl:ml-0 xl:block 2xl:ml-2 2xl:inline">
                                <Badge color="scale" size="small">
                                  Coming soon
                                </Badge>
                              </div>
                            )}
                          </div>
                        )

                        return (
                          <li key={`${segment.title}_link_${idx}`}>
                            {link.url ? (
                              link.url.startsWith('https') ? (
                                <a href={link.url}>{children}</a>
                              ) : (
                                <Link href={link.url}>
                                  <a>{children}</a>
                                </Link>
                              )
                            ) : (
                              Component && <Component>{children}</Component>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="border-border mt-32 flex justify-between border-t pt-8">
          <small className="small">&copy; Supabase Inc</small>
          <ThemeToggle forceDark={isLaunchWeekPage} />
        </div>
      </SectionContainer>
    </footer>
  )
}

export default Footer
