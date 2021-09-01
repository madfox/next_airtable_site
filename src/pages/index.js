import Airtable from 'airtable'

export async function getServerSideProps(ctx) {
  const base = new Airtable().base('app0mKcpXadqde3fQ')
  const result = await base('光谷创新天地二期').select({
    view: 'Grid view'
  }).firstPage()
  
  return {
    props: {
      result: result.map(r => r._rawJson)
    }
  }
}
export default function IndexPage({ result }) {
  return (
    <div className="text-xs">
      <code className="whitespace-pre-wrap">{ JSON.stringify(result, 0, 2) }</code>
    </div>
  )
}