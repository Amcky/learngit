package Linux.action;

import java.io.FileWriter;
import java.util.List;

import Linux.Auxiliary.Shell;
import Linux.po.addre;
import Linux.po.cname;
import Linux.po.mail;
import Linux.po.named;
import Linux.po.returnan;
import Linux.po.zone;
import Linux.server.addreserver;
import Linux.server.cnameserver;
import Linux.server.mailserver;
import Linux.server.namedserver;
import Linux.server.returnanserver;
import Linux.server.zoneserver;

import com.opensymphony.xwork2.ActionSupport;

public class deletezone extends ActionSupport{
	private int cid;
	private addreserver  aserver;
	private cnameserver cserver;
	private mailserver mserver;
	private returnanserver rserver;
	private Shell shell;
	private namedserver nserver;
	private zoneserver zserver;
	public static String namedpath="/etc/named.rfc1912.zones";
	public namedserver getNserver() {
		return nserver;
	}

	public void setNserver(namedserver nserver) {
		this.nserver = nserver;
	}

	public zoneserver getZserver() {
		return zserver;
	}

	public void setZserver(zoneserver zserver) {
		this.zserver = zserver;
	}

	private String name;
	


	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

	public Shell getShell() {
		return shell;
	}

	public void setShell(Shell shell) {
		this.shell = shell;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public addreserver getAserver() {
		return aserver;
	}

	public void setAserver(addreserver aserver) {
		this.aserver = aserver;
	}

	public cnameserver getCserver() {
		return cserver;
	}

	public void setCserver(cnameserver cserver) {
		this.cserver = cserver;
	}

	public mailserver getMserver() {
		return mserver;
	}

	public void setMserver(mailserver mserver) {
		this.mserver = mserver;
	}

	public returnanserver getRserver() {
		return rserver;
	}

	public void setRserver(returnanserver rserver) {
		this.rserver = rserver;
	}

	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		if(name.equals("addre")){
			addre a=aserver.showaddre(cid);
			aserver.deladdre(a);
		}
		if(name.equals("cname")){
			cname a=cserver.showcname(cid);
			cserver.delcname(a);
		}
		if(name.equals("mail")){
			mail a=mserver.showmail(cid);
			mserver.delmail(a);
		}
		if(name.equals("returnan")){
			returnan a=rserver.showreturnan(cid);
			rserver.delreturnan(a);
		}
		Shell shell=new Shell();
		System.out.println(shell.shell("/var/named/rm.sh"));
		List<named> list=nserver.shownamed();
		
		FileWriter writer = new FileWriter(namedpath, false);
		writer.close();
		
		for(named a:list)
		{
			writer = new FileWriter(namedpath, true);
			
			if(a.getPid()==0)
			{
				writer.write(a.toString());
				writer.close();
				FileWriter writer1 = new FileWriter("/var/named/" + a.getName() + ".zone", false);
				zone zone=zserver.showzoneById(a.getId());
				writer1.write(zone.toString());
				writer1.close();
				FileWriter writer2 = new FileWriter("/var/named/" + a.getName() + ".zone", true);
				List<addre> addre=aserver.showaddrebyid(a.getId());
				List<cname> cname=cserver.showcnamebyid(a.getId());
				List<mail> mail=mserver.showmailbyid(a.getId());
				if (addre != null) {
					for (addre adr : addre) {
						writer2.write(adr.toString());
					}
				}
				if (mail != null) {
					for (mail m : mail) {
						writer2.write(m.toString());
						writer2.write(m.toString1());
					}
				}
				if (cname != null) {
					for (cname c : cname) {
						writer2.write(c.toString());
					}
				}
				writer2.close();
			}
			else
			{
				writer.write(a.toStringReverse());
				writer.close();
				FileWriter writer1 = new FileWriter("/var/named/" + a.getName() + ".zone", false);
				zone zone=zserver.showzoneById(a.getId());
				writer1.write(zone.toStringReverse());
				writer1.close();
				FileWriter writer2 = new FileWriter("/var/named/" + a.getName() + ".zone", true);
				List<returnan> returnan=rserver.showreturnanbyid(a.getId());
				if (returnan != null) {
					for (returnan r : returnan) {
						writer2.write(r.toString());
					}
				}
				writer2.close();
			}
		}
		System.out.println(shell.shell("/var/named/restart.sh"));
		
		return SUCCESS;
	}
	

}
